import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * On-brand gradient + icon panel used in place of a screenshot when a
 * project has no real preview image (avoids generic mismatched stock photos).
 */
const ProjectVisual = ({ visual, className = "" }) => {
  if (!visual) return null;

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br ${visual.gradient} ${className}`}
    >
      {/* Decorative floating orbs for depth */}
      <div className="orb-3d orb-3d-a w-32 h-32 -top-6 -left-6 bg-white/20"></div>
      <div className="orb-3d orb-3d-b w-40 h-40 -bottom-10 -right-10 bg-white/15"></div>

      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl bg-white/15 border border-white/25 backdrop-blur-sm animate-float shadow-lg">
        <FontAwesomeIcon icon={visual.icon} className="text-3xl sm:text-4xl text-white" />
      </div>
    </div>
  );
};

export default ProjectVisual;
