import { Children, Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

/**
 * Wraps text (and any inline elements like <strong>/<span> inside it) so a
 * small hand traces under each word/phrase in turn while it's highlighted —
 * a guided "read along" pass that plays once when scrolled into view.
 *
 * `gate`: only starts once this is also true (used to chain a second block
 * to start after a prior one finishes, via `onComplete`).
 */
const ReadAlong = ({ children, speed = 130, gate = true, onComplete, className = "" }) => {
  const containerRef = useRef(null);
  const unitRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hand, setHand] = useState({ opacity: 0, left: 0, top: 0 });
  const [started, setStarted] = useState(false);
  const hasRunRef = useRef(false);

  unitRefs.current = [];
  let unitIndex = 0;
  const unitLengths = [];
  const renderNodes = [];

  Children.forEach(children, (child, ci) => {
    if (typeof child === "string") {
      const tokens = child.split(/(\s+)/).filter(Boolean);
      tokens.forEach((token, ti) => {
        if (/^\s+$/.test(token)) {
          renderNodes.push(<Fragment key={`ws-${ci}-${ti}`}>{token}</Fragment>);
          return;
        }
        const idx = unitIndex++;
        unitLengths.push(token.length);
        renderNodes.push(
          <span
            key={`w-${ci}-${ti}`}
            ref={(el) => (unitRefs.current[idx] = el)}
            className={`transition-colors duration-200 rounded ${
              idx === activeIndex ? "text-sky-600 font-semibold" : ""
            }`}
          >
            {token}
          </span>
        );
      });
    } else if (child !== null && child !== undefined && child !== "") {
      const idx = unitIndex++;
      unitLengths.push(12);
      renderNodes.push(
        <span
          key={`e-${ci}`}
          ref={(el) => (unitRefs.current[idx] = el)}
          className={`transition-all duration-200 rounded ${
            idx === activeIndex ? "ring-2 ring-sky-300" : ""
          }`}
        >
          {child}
        </span>
      );
    }
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !gate || hasRunRef.current) return;
    hasRunRef.current = true;

    const container = containerRef.current;
    let i = 0;
    let timeoutId;

    const moveHandTo = (idx) => {
      const wordEl = unitRefs.current[idx];
      if (!wordEl || !container) return;
      const wordRect = wordEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setHand({
        opacity: 1,
        left: wordRect.left - containerRect.left + wordRect.width / 2,
        top: wordRect.top - containerRect.top + wordRect.height + 3,
      });
    };

    const step = () => {
      if (i >= unitLengths.length) {
        setActiveIndex(-1);
        setHand((h) => ({ ...h, opacity: 0 }));
        onComplete?.();
        return;
      }
      setActiveIndex(i);
      moveHandTo(i);
      const len = unitLengths[i] || 4;
      i += 1;
      timeoutId = setTimeout(step, speed + Math.min(len, 12) * 9);
    };

    timeoutId = setTimeout(step, 250);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, gate]);

  return (
    <span ref={containerRef} className={`relative inline ${className}`}>
      {renderNodes}
      <FontAwesomeIcon
        icon={faHandPointUp}
        className="absolute text-sky-500 drop-shadow-sm pointer-events-none transition-all ease-out -translate-x-1/2"
        style={{
          left: `${hand.left}px`,
          top: `${hand.top}px`,
          opacity: hand.opacity,
          fontSize: "0.95rem",
          transitionDuration: `${Math.max(speed - 20, 80)}ms`,
        }}
      />
    </span>
  );
};

export default ReadAlong;
