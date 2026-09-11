import { useState } from "react";
import person from "../../assets/images/person2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import Tilt3D from "../common/tilt/Tilt3D";
import Reveal from "../common/reveal/Reveal";
import ReadAlong from "../common/readAlong/ReadAlong";
import Magnetic from "../common/magnetic/Magnetic";

const Profile = () => {
  const [para1Done, setPara1Done] = useState(false);

  return (
    <div
      className="relative mx-4 xxl:mx-0.5 z-10 rounded-3xl bg-white border border-slate-100 backdrop-blur-xl shadow-2xl shadow-sky-200/50 xl:p-20 lg:p-16 md:p-12 sm:p-10 p-6"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-10">

        {/* Profile image */}
        <div className="w-auto h-auto text-center">
          <Tilt3D max={14} className="w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-full">
            <div className="w-full h-full rounded-full p-1 bg-gradient-to-tr from-sky-400 via-sky-500 to-blue-600 shadow-xl shadow-sky-300/30 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={person}
                alt="Profile"
              />
            </div>
          </Tilt3D>

          {/* Social media section */}
          <div className="mt-6">
            <div className="inline-block px-4 py-2 bg-sky-50/80 border border-sky-100 rounded-xl shadow-sm">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Profile details */}
        <Reveal as="div" direction="right" className="max-sm:w-full w-[36rem] text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold mb-6 text-slate-900 tracking-tight">
            I am <span className="text-gradient-cyan">Full-Stack Developer</span> &amp; API Specialist
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <ReadAlong onComplete={() => setPara1Done(true)}>
              I specialize in connecting travel booking platforms to real, production third-party APIs across{" "}
              <span className="bg-sky-50 text-sky-600 border border-sky-200 px-2 py-0.5 rounded font-medium">
                hotels, flights, cars, trains, and payment gateways
              </span>.
              With core expertise in <strong>PHP</strong>, <strong>Laravel</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and frontend frameworks (<strong>Vue.js</strong> &amp; <strong>React</strong>), I handle token authentication, JSON data mapping, webhook status listeners, and high-reliability integrations.
            </ReadAlong>
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            <ReadAlong gate={para1Done}>
              I've integrated hotel supply APIs (Travelpayouts, Hotelbeds, Wanderbeds, RateHawk, TourBMS), Duffel flight API, Mozio car API, train rail networks, and payment processing (Xmoney), alongside building backend REST APIs for mobile applications.
            </ReadAlong>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex max-md:justify-center gap-4">
            <Magnetic>
              <a
                className="inline-block px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-sky-300/40 text-sm sm:text-base"
                href="#portfolio"
              >
                🚀 View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all duration-300 shadow-md text-sm sm:text-base"
                href={`${import.meta.env.BASE_URL}Shahid_Iqbal_Resume.pdf`}
                download="Shahid_Iqbal_Resume.pdf"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Profile;
