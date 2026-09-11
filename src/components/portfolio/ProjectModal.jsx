import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import ProjectVisual from "./ProjectVisual";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-slate-900/30 border border-slate-100 animate-[fadeInUp_0.25s_ease-out]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-slate-500 border border-slate-200 shadow-sm hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden bg-sky-50">
          {project.CustomVisual ? (
            <project.CustomVisual />
          ) : project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </>
          ) : (
            <ProjectVisual visual={project.visual} />
          )}
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
            {project.category}
          </p>
          <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {project.highlights && (
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Integration Specs
              </p>
              <ul className="space-y-2.5">
                {project.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-sky-50 text-sky-600">
                      <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tags && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
