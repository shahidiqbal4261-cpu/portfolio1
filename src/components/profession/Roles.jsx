import { useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-6 sm:p-8 bg-white border border-slate-100 backdrop-blur-md shadow-md shadow-sky-100/50 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-200/60 ease-out duration-300 rounded-2xl my-4 flex relative overflow-hidden group"
    >
      {/* Left Hover Accent Bar */}
      <span
        className={`bg-gradient-to-b from-sky-400 via-sky-600 to-blue-700 absolute left-0 top-0 h-full transition-all duration-300 ${
          mouseHover ? "w-1.5" : "w-0"
        }`}
      />

      <div>
        {/* Title */}
        <p className="text-xl sm:text-2xl font-bold text-slate-900 pb-2.5 group-hover:text-sky-600 transition-colors duration-300">
          {role?.title}
        </p>
        {/* Description */}
        <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;