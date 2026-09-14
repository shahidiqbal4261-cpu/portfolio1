import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectVisual from "./ProjectVisual";

const ProjectModal = ({ project, onClose }) => {
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    if (!project) return;
    setTab("overview");

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

  const hasCaseStudy = Boolean(project.caseStudy);
  const tabs = [
    { id: "overview", label: "Overview" },
    ...(hasCaseStudy ? [{ id: "case", label: "Case Study" }] : []),
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-slate-900/30 border border-slate-100 animate-[fadeInUp_0.25s_ease-out]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-slate-500 border border-slate-200 shadow-sm hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition-colors duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900 flex items-center justify-center">
          {project.CustomVisual ? (
            <project.CustomVisual />
          ) : project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </>
          ) : (
            <ProjectVisual visual={project.visual} />
          )}
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
            {project.category}
          </p>
          <h3
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight pr-10"
          >
            {project.title}
          </h3>

          {tabs.length > 1 && (
            <div className="flex gap-2 mb-6 border-b border-slate-100 pb-0">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${
                    tab === item.id
                      ? "border-sky-500 text-sky-600"
                      : "border-transparent text-slate-500 hover:text-sky-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {tab === "overview" && (
            <>
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
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                      >
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-sky-50 text-sky-600">
                          <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {tab === "case" && project.caseStudy && (
            <div className="space-y-5 mb-6">
              {[
                { label: "Problem", value: project.caseStudy.problem },
                { label: "My role", value: project.caseStudy.role },
                { label: "Approach", value: project.caseStudy.approach },
                { label: "Result", value: project.caseStudy.result },
              ]
                .filter((block) => block.value)
                .map((block) => (
                  <div key={block.label}>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1.5">
                      {block.label}
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {block.value}
                    </p>
                  </div>
                ))}

              {project.caseStudy.outcomes?.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
                    Outcomes
                  </p>
                  <ul className="space-y-2">
                    {project.caseStudy.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                      >
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-sky-50 text-sky-600">
                          <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {project.tags && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-300/30 text-sm"
              >
                View live <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 text-sm"
              >
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            )}
            {!project.link && (
              <a
                href={`mailto:shahidiqbal4261@gmail.com?subject=${encodeURIComponent(
                  `Inquiry: ${project.title}`
                )}&body=${encodeURIComponent(
                  `Hi Shahid,\n\nI'd like to discuss the "${project.title}" integration / similar work.\n`
                )}`}
                className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-300/30 text-sm"
              >
                Discuss this integration
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
