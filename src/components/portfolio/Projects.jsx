import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt3D from "../common/tilt/Tilt3D";
import ProjectVisual from "./ProjectVisual";

const Projects = ({ data, onOpen }) => {
  const tags = (data?.tags || []).slice(0, 3);

  return (
    <Tilt3D
      max={5}
      scale={1.01}
      onClick={() => onOpen?.(data)}
      className="group flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/40 transition-[border-color,box-shadow] duration-300 cursor-pointer"
    >
      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
        <div className="absolute inset-y-0 left-[-40%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-[left] duration-700 ease-out group-hover:left-[130%]" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center">
        {data?.CustomVisual ? (
          <data.CustomVisual />
        ) : data?.image ? (
          <img
            src={data.image}
            alt={`${data?.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <ProjectVisual visual={data.visual} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
            {data?.category}
          </p>

          <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-2 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
            {data?.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {data?.description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100 transition-colors duration-300 group-hover:border-sky-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-100">
          <span className="inline-flex items-center text-sky-600 font-semibold text-sm">
            View details
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
