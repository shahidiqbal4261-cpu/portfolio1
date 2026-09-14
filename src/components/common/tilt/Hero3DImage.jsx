import { useRef, useState } from "react";
import person from "../../../assets/images/person.png";

const Hero3DImage = () => {
  const containerRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 24; // max tilt
    const rotateX = -(py - 0.5) * 24;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] select-none my-4">
      {/* 3D Ambient Glow Aura behind card */}
      <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-sky-400 via-cyan-300 to-blue-600 opacity-60 blur-2xl animate-pulse pointer-events-none" />
      
      {/* 3D Interactive Card Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
        className="relative w-full h-full rounded-[30px] p-2 bg-gradient-to-br from-white/90 via-sky-100/60 to-white/40 border border-white/80 shadow-[0_20px_50px_rgba(14,165,233,0.3)] backdrop-blur-xl [transform-style:preserve-3d] transition-transform duration-200 ease-out cursor-pointer group overflow-visible"
      >
        {/* Interactive Specular Reflection Glare */}
        <div
          className="absolute inset-0 rounded-[28px] pointer-events-none transition-opacity duration-300 z-30"
          style={glareStyle}
        />

        {/* Outer 3D Glass Frame */}
        <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-900/5 border border-sky-200/50 p-1.5 [transform-style:preserve-3d]">
          {/* Holographic light scan beam */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-400/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

          {/* Elevated 3D Image Container */}
          <div
            className="w-full h-full rounded-[18px] overflow-hidden shadow-inner relative [transform:translateZ(30px)] group-hover:[transform:translateZ(45px)] transition-transform duration-300"
          >
            <img
              src={person}
              alt="Shahid Iqbal - Full Stack Developer"
              className="w-full h-full object-cover rounded-[18px] transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* --- Floating 3D Holographic Badges (Popping out in Z-space) --- */}

        {/* Badge 1: Top Right - API Integration Specialist */}
        <div className="absolute -top-4 -right-4 z-40 px-3.5 py-2 rounded-2xl bg-white/95 border border-sky-200 shadow-xl shadow-sky-500/20 backdrop-blur-md flex items-center gap-2 [transform:translateZ(55px)] group-hover:[transform:translateZ(75px)] transition-transform duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold text-slate-800 tracking-wide">
            ⚡ API Integration Pro
          </span>
        </div>

        {/* Badge 2: Bottom Left - Full-Stack Developer */}
        <div className="absolute -bottom-3 -left-4 z-40 px-3.5 py-2 rounded-2xl bg-white/95 border border-sky-200 shadow-xl shadow-sky-500/20 backdrop-blur-md flex items-center gap-2 [transform:translateZ(50px)] group-hover:[transform:translateZ(70px)] transition-transform duration-300">
          <span className="text-sm">🚀</span>
          <span className="text-xs font-bold text-sky-700 tracking-wide">
            Full-Stack Engineer
          </span>
        </div>

        {/* Badge 3: Experience Pill */}
        <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-40 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black text-xs shadow-lg shadow-sky-400/40 [transform:translateZ(60px)] group-hover:[transform:translateZ(80px)] transition-transform duration-300 hidden sm:flex items-center gap-1.5">
          <span>⭐</span> 2+ Yrs Exp
        </div>
      </div>
    </div>
  );
};

export default Hero3DImage;
