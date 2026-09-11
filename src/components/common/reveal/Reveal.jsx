import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides children into view the first time they cross the viewport.
 * delay is in ms; direction controls the initial offset.
 */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset =
    direction === "up"
      ? "translate-y-8"
      : direction === "down"
      ? "-translate-y-8"
      : direction === "left"
      ? "translate-x-8"
      : direction === "right"
      ? "-translate-x-8"
      : "";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offset}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
