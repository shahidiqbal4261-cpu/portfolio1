import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt3D from "../common/tilt/Tilt3D";
import ProjectVisual from "./ProjectVisual";

const Projects = ({ data, onOpen }) => {
  return (
    <Tilt3D
      max={7}
      scale={1.015}
      onClick={() => onOpen?.(data)}
      className="group flex flex-col rounded-2xl bg-white border border-slate-100 backdrop-blur-xl overflow-hidden shadow-md shadow-sky-100/50 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/60 transition-colors duration-500 cursor-pointer"
    >
      {/* Shine sweep on hover */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-y-0 left-[-50%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-[left] duration-700 ease-out group-hover:left-[150%]" />
      </div>

      {/* Project Image / Custom Visual */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        {data?.CustomVisual ? (
          <data.CustomVisual />
        ) : data?.image ? (
          <>
            <img
              src={data.image}
              alt={`${data?.title} image`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
          </>
        ) : (
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            <ProjectVisual visual={data.visual} />
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <p className="text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
            {data?.category}
          </p>

          {/* Title */}
          <h3 className="text-slate-900 text-xl font-bold mb-3 group-hover:text-sky-600 transition-colors duration-300">
            {data?.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {data?.description}
          </p>

          {/* Tech tags */}
          {data?.tags && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {data.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Link Button */}
        <div className="pt-3 border-t border-slate-100">
          <span className="inline-flex items-center text-sky-600 font-semibold text-sm group-hover:text-sky-500 transition-colors duration-300">
            View Details &amp; Integration Specs
            <span className="ms-2 transition-transform duration-300 group-hover:translate-x-1.5">
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </span>
          </span>
        </div>
      </div>
    </Tilt3D>
  );
};

export default Projects;