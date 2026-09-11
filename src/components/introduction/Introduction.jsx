import person from "../../assets/images/person.png";
import InformationSummary from "./InformationSummary"; // Ensure this component exists
import Tilt3D from "../common/tilt/Tilt3D";
import Reveal from "../common/reveal/Reveal";
import Magnetic from "../common/magnetic/Magnetic";
import TypewriterRoles from "../common/typewriter/TypewriterRoles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft, faHandPointDown } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div
      className="relative flex max-lg:flex-col lg:flex-row-reverse justify-between items-center py-16 lg:py-24 px-4 sm:px-8 xl:px-16 gap-12 overflow-hidden"
      id="introduction"
    >
      {/* Floating 3D orbs (decorative depth layer) */}
      <div className="orb-3d orb-3d-a w-72 h-72 -top-10 right-10 bg-sky-300/40"></div>
      <div className="orb-3d orb-3d-b w-64 h-64 bottom-0 left-0 bg-blue-200/40"></div>

      {/* Right Column (Image Container) */}
      <div className="relative w-full lg:w-5/12 max-w-md mx-auto animate-float">
        <Tilt3D max={8} className="aspect-[4/5] rounded-3xl">
          <div className="w-full h-full p-1.5 rounded-3xl bg-gradient-to-tr from-sky-400 via-sky-500 to-blue-600 shadow-2xl shadow-sky-300/40">
            <div className="w-full h-full bg-white rounded-[22px] overflow-hidden p-2">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={person}
                alt="Shahid Iqbal"
              />
            </div>
          </div>
        </Tilt3D>

        {/* Pointing hand — desktop: gestures left toward the intro text */}
        <div className="hidden lg:flex absolute top-1/2 -left-8 xl:-left-12 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-xl shadow-sky-300/40 border border-sky-100 animate-point-x">
          <FontAwesomeIcon icon={faHandPointLeft} className="text-2xl text-sky-500" />
        </div>

        {/* Pointing hand — mobile: gestures down toward the intro text below */}
        <div className="flex lg:hidden absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-white shadow-xl shadow-sky-300/40 border border-sky-100 animate-point-y">
          <FontAwesomeIcon icon={faHandPointDown} className="text-2xl text-sky-500" />
        </div>
      </div>

      {/* Left Column (Text and Stats) */}
      <div className="w-full lg:w-6/12 flex flex-col justify-center max-lg:text-center">
        <Reveal className="max-w-xl mx-auto lg:mx-0">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 text-sm font-medium mb-4 shadow-sm shadow-sky-100">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Available for Senior &amp; Integration Engineering Roles
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
              <a
                className="inline-block px-6 py-3.5 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 shadow-sm transition duration-300"
                href="#portfolio"
              >
                View Projects ↓
              </a>
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