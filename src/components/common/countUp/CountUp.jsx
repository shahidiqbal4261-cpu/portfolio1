import { useEffect, useRef, useState } from "react";

/**
 * Counts up from 0 to the numeric part of `value` (e.g. "8+" -> 8)
 * once it scrolls into view. Runs once. Respects prefers-reduced-motion.
 */
const CountUp = ({ value, duration = 1400, delay = 0, className = "" }) => {
  const match = String(value).trim().match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2].trim() : "";

  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        if (reduceMotion) {
          setCount(target);
          setStarted(true);
          return;
        }

        const kickoff = () => {
          setStarted(true);
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        };

        if (delay > 0) {
          setTimeout(kickoff, delay);
        } else {
          kickoff();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, delay]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-opacity duration-500 ${
        started ? "opacity-100" : "opacity-60"
      } ${className}`}
    >
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
