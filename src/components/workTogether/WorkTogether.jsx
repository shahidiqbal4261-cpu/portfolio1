import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "../common/reveal/Reveal";
import Magnetic from "../common/magnetic/Magnetic";

const WorkTogether = () => {
  return (
    <div className="relative max-w-169 mx-auto px-2 overflow-visible">
      {/* Floating 3D orbs — light against the saturated band */}
      <div className="orb-3d orb-3d-a w-56 h-56 -top-16 -left-10 bg-white/20"></div>
      <div className="orb-3d orb-3d-b w-64 h-64 -bottom-10 -right-10 bg-white/15"></div>

      <Reveal className="relative text-center">
        {/* Heading */}
        <p className="text-white font-bold text-2xl sm:text-3xl md:text-5xl pb-6 tracking-tight">
          Have an API Integration or <span className="text-yellow-200">Backend Project</span> in Mind?
        </p>

        {/* Subheading */}
        <p className="text-sky-50/90 text-sm sm:text-lg font-normal text-center pb-8 max-w-2xl mx-auto leading-relaxed">
          I'm open to backend roles, freelance work, and contract API integrations. Let's
          connect and build something reliable together.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Email Button */}
          <Magnetic>
            <a
              href="mailto:shahidiqbal4261@gmail.com"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base text-sky-700 bg-white shadow-lg shadow-sky-900/20 hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              Let's work Together
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ms-3"
              />
            </a>
          </Magnetic>

          {/* WhatsApp Button */}
          <Magnetic>
            <a
              href="https://wa.me/923055668426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base text-white bg-green-600 hover:bg-green-500 shadow-lg shadow-green-900/20 hover:scale-[1.03] transition-all duration-300 border border-white/20"
            >
              Chat on WhatsApp
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </div>
  );
};

export default WorkTogether;
