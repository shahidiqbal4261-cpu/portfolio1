import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import Reveal from "../common/reveal/Reveal";
import Magnetic from "../common/magnetic/Magnetic";
import InformationSummary from "../introduction/InformationSummary";

const informationSummaryData = [
  { id: 1, title: "Years Experience", description: "2+ " },
  { id: 2, title: "API Integrations", description: "8+" },
  { id: 3, title: "Projects Completed", description: "10+" },
];

const Profile = () => {
  return (
    <div className="relative z-10 py-8 md:py-12 px-4 sm:px-8" id="profile">
      <Reveal className="max-w-5xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex-1">
            <p className="section-eyebrow max-md:text-center">About</p>
            <h2 className="section-title text-slate-900 mb-5">
              Full-Stack Developer &amp;{" "}
              <span className="text-gradient">API Specialist</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              I connect travel booking platforms to production third-party APIs across hotels, flights, cars, trains, and payment gateways. Core stack: PHP, Laravel, MySQL, PostgreSQL, Vue.js, and React — with token auth, JSON mapping, webhook listeners, and reliable integrations.
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
              Integrated Travelpayouts, Hotelbeds, Wanderbeds, RateHawk, TourBMS, Duffel, Mozio, rail networks, and Xmoney payments, plus REST backends for mobile apps.
            </p>

            <div className="mt-8 flex max-md:justify-center flex-wrap gap-4">
              <Magnetic>
                <a
                  className="inline-block px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-sky-300/30 text-sm sm:text-base"
                  href="#portfolio"
                >
                  View Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-all duration-300 text-sm sm:text-base"
                  href={`${import.meta.env.BASE_URL}Shahid_Iqbal_Resume.pdf`}
                  download="Shahid_Iqbal_Resume.pdf"
                >
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="md:w-56 shrink-0 flex flex-col items-center gap-5">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 w-full">
              {informationSummaryData.map((item, index) => (
                <InformationSummary key={item.id} item={item} delay={index * 120} />
              ))}
            </div>
            <div className="inline-flex gap-2">
              <SocialMedia />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Profile;
