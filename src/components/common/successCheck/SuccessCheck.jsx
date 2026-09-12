/** Small circle + checkmark that draw themselves in on success. */
const SuccessCheck = ({ className = "" }) => (
  <svg viewBox="0 0 52 52" className={`w-8 h-8 shrink-0 ${className}`}>
    <circle
      cx="26"
      cy="26"
      r="23"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeDasharray="145"
      strokeDashoffset="145"
      style={{ animation: "drawCircle 0.5s ease-out forwards" }}
    />
    <path
      d="M14 27l7 7 17-17"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="40"
      strokeDashoffset="40"
      style={{ animation: "drawCheck 0.35s ease-out 0.45s forwards" }}
    />
  </svg>
);

export default SuccessCheck;
