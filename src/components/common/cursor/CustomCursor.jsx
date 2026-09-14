import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (
        target.closest("a, button, [role='button'], input, textarea, .cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animFrame;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x + 18 - prev.x) * 0.15,
        y: prev.y + (position.y + 18 - prev.y) * 0.15,
      }));
      animFrame = requestAnimationFrame(follow);
    };
    animFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Small Cute Floating Doll Mascot Trailing the Pointer */}
      <div
        className={`fixed top-0 left-0 transition-transform duration-200 ease-out ${
          isHovered ? "scale-125 -rotate-12" : "scale-100 rotate-0"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className="relative group">
          {/* Subtle Glowing Aura behind Doll */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 opacity-70 blur-sm animate-pulse" />

          {/* Small Cute Doll Avatar Container */}
          <div className="relative w-9 h-9 rounded-full bg-white/95 border-2 border-sky-300 shadow-lg shadow-sky-400/40 flex items-center justify-center p-1 backdrop-blur-md">
            {/* Cute Doll Character Vector Graphic */}
            <svg
              className="w-6 h-6 text-sky-500 transition-transform duration-300 animate-bounce"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cute Doll Hair / Crown */}
              <path
                d="M18 4C12 4 8 8 8 13C8 17 12 18 18 18C24 18 28 17 28 13C28 8 24 4 18 4Z"
                fill="#38BDF8"
              />
              {/* Cute Doll Face */}
              <circle cx="18" cy="17" r="7" fill="#FFF" stroke="#0EA5E9" strokeWidth="1.5" />
              {/* Cute Eyes */}
              <circle cx="15.5" cy="16" r="1.2" fill="#0F172A" />
              <circle cx="20.5" cy="16" r="1.2" fill="#0F172A" />
              {/* Blush cheeks */}
              <circle cx="14" cy="18" r="1" fill="#F43F5E" opacity="0.6" />
              <circle cx="22" cy="18" r="1" fill="#F43F5E" opacity="0.6" />
              {/* Smile */}
              <path
                d="M16.5 19.5C17.2 20.2 18.8 20.2 19.5 19.5"
                stroke="#0284C7"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Cute Dress / Body */}
              <path
                d="M13 23L18 20L23 23L25 31H11L13 23Z"
                fill="#0EA5E9"
                stroke="#0284C7"
                strokeWidth="1"
              />
              {/* Sparkle Wand */}
              <circle cx="26" cy="11" r="1.5" fill="#F59E0B" className="animate-ping" />
            </svg>

            {/* Floating Heart / Sparkle Emoji when hovered */}
            {isHovered && (
              <span className="absolute -top-3 -right-2 text-xs animate-bounce">
                ✨
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
