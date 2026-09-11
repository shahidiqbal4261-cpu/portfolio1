/**
 * Soft layered "hill" transition between two sections, echoing a
 * sky-blue-to-white wave silhouette. `back` sits behind and drifts
 * slowly; `front` is solid and matches the next section's background.
 */
const WaveDivider = ({
  front = "#ffffff",
  back = "#dbeeFb",
  flip = false,
  className = "",
}) => (
  <div
    className={`relative w-full overflow-hidden leading-none -mb-px pointer-events-none ${
      flip ? "rotate-180" : ""
    } ${className}`}
    aria-hidden="true"
  >
    <svg
      className="block w-full h-14 sm:h-20 md:h-28"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
    >
      <path
        className="animate-wave-drift-slow"
        d="M0,40 C220,110 420,0 700,42 C980,84 1220,10 1440,52 L1440,140 L0,140 Z"
        fill={back}
        opacity="0.7"
      />
      <path
        className="animate-wave-drift"
        d="M0,80 C260,24 480,132 760,78 C1040,24 1240,110 1440,66 L1440,140 L0,140 Z"
        fill={front}
      />
    </svg>
  </div>
);

export default WaveDivider;
