import { useRef } from "react";

/**
 * Lightweight, dependency-free 3D tilt wrapper.
 * Tracks pointer position and applies a perspective rotateX/rotateY
 * transform plus a soft moving glare, snapping back on leave.
 */
const Tilt3D = ({
  children,
  className = "",
  max = 10,
  scale = 1.02,
  glare = true,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const frame = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * max * 2;
      const rotateX = -(py - 0.5) * max * 2;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glare && glareRef.current) {
        glareRef.current.style.opacity = "1";
        glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.18), transparent 55%)`;
      }
    });
  };

  const handleMouseLeave = (e) => {
    const el = cardRef.current;
    if (el) {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      if (glare && glareRef.current) {
        glareRef.current.style.opacity = "0";
      }
    }
    onMouseLeave?.(e);
  };

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`relative [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform ${
        onClick ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2" : ""
      } ${className}`}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{ mixBlendMode: "overlay" }}
        />
      )}
    </div>
  );
};

export default Tilt3D;
