import { useState } from "react";
import Hero3DImage from "../common/tilt/Hero3DImage";
import Reveal from "../common/reveal/Reveal";
import Magnetic from "../common/magnetic/Magnetic";
import TypewriterRoles from "../common/typewriter/TypewriterRoles";
import ResumeModal from "../common/resume/ResumeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const roleTitles = [
  "Full-Stack Developer",
  "API Integration Specialist",
  "Laravel Backend Engineer",
  "PHP Developer",
];

const Introduction = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div
      className="relative flex max-lg:flex-col lg:flex-row-reverse justify-between items-center py-16 lg:py-28 px-4 sm:px-8 xl:px-16 gap-12 lg:gap-16"
      id="introduction"
    >
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <div className="relative w-full lg:w-5/12 max-w-md mx-auto">
        <Hero3DImage />
      </div>

      <div className="w-full lg:w-6/12 flex flex-col justify-center max-lg:text-center">
        <Reveal className="max-w-xl mx-auto lg:mx-0">
          <p className="text-base sm:text-lg font-medium text-slate-500 mb-2">
            Hello, I’m
          </p>

          <h1 className="text-5xl xs:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-4 text-slate-900 tracking-tight">
            Shahid <span className="text-gradient">Iqbal</span>
          </h1>

          <p className="h-8 sm:h-9 text-xl sm:text-2xl font-semibold text-sky-600 mb-5">
            <TypewriterRoles roles={roleTitles} />
          </p>

          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg max-lg:mx-auto">
            I connect travel booking platforms to production APIs — hotels, flights, cars, trains, and payments — with Laravel and React.
          </p>

          <div className="flex max-lg:justify-center flex-wrap gap-4">
            <Magnetic>
              <a
                className="inline-block px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 shadow-lg shadow-sky-300/40 hover:shadow-sky-400/50 hover:scale-[1.02] transition duration-300"
                href="mailto:shahidiqbal4261@gmail.com?subject=Hello Shahid&body=Hi, I want to discuss a project with you."
              >
                Say Hello
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:border-sky-400 hover:text-sky-600 shadow-sm transition duration-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faEye} className="text-sky-500" /> Preview Resume
              </button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Introduction;
