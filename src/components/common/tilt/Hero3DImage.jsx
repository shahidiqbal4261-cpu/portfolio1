import { useEffect, useRef, useState } from "react";
import person from "../../../assets/images/person.png";

const Hero3DImage = () => {
  const containerRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateY = (px - 0.5) * 14;
    const rotateX = -(py - 0.5) * 14;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setGlareStyle({
      opacity: 0.7,
      background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255, 255, 255, 0.35) 0%, transparent 55%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] select-none">
      <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-sky-400/50 via-sky-300/30 to-blue-600/40 opacity-70 blur-2xl pointer-events-none" />

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
        className="relative w-full h-full rounded-[28px] p-1.5 bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100/80 shadow-[0_20px_50px_rgba(14,165,233,0.18)] [transform-style:preserve-3d] transition-transform duration-200 ease-out overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-[26px] pointer-events-none transition-opacity duration-300 z-20"
          style={glareStyle}
        />

        <div className="relative w-full h-full rounded-[22px] overflow-hidden">
          <img
            src={person}
            alt="Shahid Iqbal - Full Stack Developer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Hero3DImage;
