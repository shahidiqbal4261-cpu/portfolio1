import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt3D from "../common/tilt/Tilt3D";

const WorkSteps = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <Tilt3D
      max={6}
      scale={1.02}
      className="rounded-2xl bg-white border border-slate-100 backdrop-blur-md p-6 sm:p-8 shadow-md shadow-sky-100/50 transition-colors duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-200/60 cursor-pointer group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl transition-all duration-500 ${
          hover
            ? "bg-gradient-to-tr from-sky-500 to-blue-600 text-white scale-110 shadow-lg shadow-sky-300/40"
            : "bg-sky-50 text-sky-600 border border-sky-100"
        }`}
      >
        <FontAwesomeIcon
          icon={data?.icon}
          className="text-xl sm:text-2xl"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 font-bold text-xl text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
        {`${data?.id}. ${data?.title}`}
      </h3>

      {/* Description */}
      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        {data?.description}
      </p>
    </Tilt3D>
  );
};

export default WorkSteps;
