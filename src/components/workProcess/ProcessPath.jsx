import { useEffect, useRef, useState } from "react";

/**
 * Draws an SVG line connecting the centers of each step card (measured live,
 * so it adapts to any grid/column layout), animating it in once the grid
 * scrolls into view.
 */
const ProcessPath = ({ containerRef, itemRefs, count }) => {
  const [pathD, setPathD] = useState("");
  const [active, setActive] = useState(false);
  const svgWrapRef = useRef(null);

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const points = itemRefs.current
        .slice(0, count)
        .filter(Boolean)
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.left - containerRect.left + r.width / 2,
            y: r.top - containerRect.top + r.height / 2,
          };
        });
      if (points.length < 2) return;
      setPathD(points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" "));
    };

    compute();
    window.addEventListener("resize", compute);
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", compute);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    const el = svgWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={svgWrapRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke="url(#processGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2000"
        strokeDashoffset={active ? 0 : 2000}
        style={{ transition: "stroke-dashoffset 1.6s ease-in-out" }}
      />
    </svg>
  );
};

export default ProcessPath;
