import { useRef } from "react";

/** Wraps a button/link so it subtly pulls toward the cursor, then snaps back. */
const Magnetic = ({ children, strength = 18, className = "" }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  );
};

export default Magnetic;
