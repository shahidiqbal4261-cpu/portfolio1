import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkSteps = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="rounded-2xl bg-white border border-slate-100 p-6 sm:p-7 transition-colors duration-300 hover:border-sky-300 cursor-default group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl transition-colors duration-300 ${
          hover
            ? "bg-sky-500 text-white"
            : "bg-sky-50 text-sky-600 border border-sky-100"
        }`}
      >
        <FontAwesomeIcon icon={data?.icon} className="text-lg sm:text-xl" />
      </div>

      <h3 className="mt-5 font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
        {`${data?.id}. ${data?.title}`}
      </h3>

      <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
        {data?.description}
      </p>
    </div>
  );
};

export default WorkSteps;
