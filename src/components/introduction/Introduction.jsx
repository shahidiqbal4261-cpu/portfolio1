import { useState } from "react";
import Hero3DImage from "../common/tilt/Hero3DImage";
import InformationSummary from "./InformationSummary";
import Reveal from "../common/reveal/Reveal";
import Magnetic from "../common/magnetic/Magnetic";
import TypewriterRoles from "../common/typewriter/TypewriterRoles";
import AiStatusPulse from "../common/ai/AiStatusPulse";
import ResumeModal from "../common/resume/ResumeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft, faHandPointDown, faEye } from "@fortawesome/free-solid-svg-icons";

const roleTitles = [
  "Full-Stack Developer",
  "API Integration Specialist",
  "Laravel Backend Engineer",
  "PHP Developer",
];

const informationSummaryData = [
  {
    id: 1,
    title: "Years Experience",
    description: "2+ ",
  },
  {
    id: 2,
    title: "API Integrations",
    description: "8+",
  },
  {
    id: 3,
    title: "Projects Completed",
    description: "10+",
  },
];

const Introduction = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div
      className="relative flex max-lg:flex-col lg:flex-row-reverse justify-between items-center py-16 lg:py-24 px-4 sm:px-8 xl:px-16 gap-12 overflow-hidden"
      id="introduction"
    >
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Floating 3D orbs (decorative depth layer) */}
      <div className="orb-3d orb-3d-a w-72 h-72 -top-10 right-10 bg-sky-300/40"></div>
      <div className="orb-3d orb-3d-b w-64 h-64 bottom-0 left-0 bg-blue-200/40"></div>

      {/* Right Column (3D Interactive Image Showcase) */}
      <div className="relative w-full lg:w-5/12 max-w-md mx-auto animate-float">
        <Hero3DImage />

        {/* Pointing hand — desktop */}
        <div className="hidden lg:flex absolute top-1/2 -left-8 xl:-left-12 -translate-y-1/2 z-50 w-14 h-14 items-center justify-center rounded-full bg-white shadow-xl shadow-sky-300/40 border border-sky-100 animate-point-x">
          <FontAwesomeIcon icon={faHandPointLeft} className="text-2xl text-sky-500" />
        </div>

        {/* Pointing hand — mobile */}
        <div className="flex lg:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 z-50 w-14 h-14 items-center justify-center rounded-full bg-white shadow-xl shadow-sky-300/40 border border-sky-100 animate-point-y">
          <FontAwesomeIcon icon={faHandPointDown} className="text-2xl text-sky-500" />
        </div>
      </div>

      {/* Left Column (Text and Stats) */}
      <div className="w-full lg:w-6/12 flex flex-col justify-center max-lg:text-center">
        <Reveal className="max-w-xl mx-auto lg:mx-0">

          {/* 2026 AI Status Pulse */}
          <div className="mb-4">
            <AiStatusPulse />
          </div>

          <p className="text-lg sm:text-xl font-medium text-slate-500 mb-1">
            Hello, I’m
          </p>

          <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold leading-tight mb-2 text-slate-900 tracking-tight">
            Shahid <span className="text-gradient">Iqbal</span>
          </h1>

          <p className="h-7 sm:h-8 text-lg sm:text-xl font-semibold text-sky-600 mb-4">
            <TypewriterRoles roles={roleTitles} />
          </p>

          <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
            I’m a
            <span className="px-2 py-0.5 mx-1 rounded-md bg-sky-50 border border-sky-200 font-semibold text-sky-700">
                Full-Stack Developer
            </span>
            &amp;
            <span className="px-2 py-0.5 mx-1 rounded-md bg-blue-50 border border-blue-200 font-semibold text-blue-700">
                API Integration Specialist
            </span>
            specializing in
            <span className="px-2 py-0.5 mx-1 rounded-md bg-sky-50 border border-sky-200 font-semibold text-sky-600">
                PHP / Laravel
            </span>
            and
            <span className="px-2 py-0.5 mx-1 rounded-md bg-sky-50 border border-sky-200 font-semibold text-sky-600">
                React.js
            </span>
            . I connect travel booking platforms to production third-party APIs across hotels, flights, cars, trains, and payment gateways.
          </p>

          <div className="flex max-lg:justify-center flex-wrap gap-4 mb-10">
            <Magnetic>
              <a
                className="inline-block px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 shadow-lg shadow-sky-300/40 hover:shadow-sky-400/50 hover:scale-[1.03] transition duration-300"
                href="mailto:shahidiqbal4261@gmail.com?subject=Hello Shahid&body=Hi, I want to discuss a project with you."
              >
                Say Hello 👋
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

        {/* Information Summary / Stats Section */}
        <Reveal delay={150} className="max-w-xl mx-auto lg:mx-0 mt-2">
          <div className="grid grid-cols-3 gap-4">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Introduction;