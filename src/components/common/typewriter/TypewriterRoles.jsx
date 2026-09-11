import { useEffect, useState } from "react";

/** Types out each role, pauses, deletes, then moves to the next — loops forever. */
const TypewriterRoles = ({
  roles,
  className = "",
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1400,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | deleting

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let timeoutId;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeoutId = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeoutId = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      if (text.length > 0) {
        timeoutId = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setPhase("typing");
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, phase, roleIndex, roles, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-current ml-0.5 animate-pulse" />
    </span>
  );
};

export default TypewriterRoles;
