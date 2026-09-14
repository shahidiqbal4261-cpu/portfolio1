import Roles from "./Roles";
import Reveal from "../common/reveal/Reveal";
import Magnetic from "../common/magnetic/Magnetic";

const rolesData = [
  {
    id: 1,
    title: "Third-Party Travel API Integrations",
    description:
      "Integrating hotel supply APIs (Travelpayouts, Hotelbeds, RateHawk, Wanderbeds, TourBMS), Duffel flight API, Mozio car API, and train rail networks with JSON data mapping & webhooks.",
  },
  {
    id: 2,
    title: "Backend Development (PHP & Laravel)",
    description:
      "Developing scalable REST APIs, session/token authentication, webhook listeners, mobile app backends, and managing MySQL & PostgreSQL databases for booking platforms.",
  },
  {
    id: 3,
    title: "Frontend & Mobile UI (React & Vue.js)",
    description:
      "Building responsive interfaces with React.js, Vue.js, and TailwindCSS to map complex multi-supplier search and booking results seamlessly for end users.",
  },
  {
    id: 4,
    title: "Payment Gateway Integration",
    description:
      "Integrating Xmoney payment gateway (card & wallet payments), implementing security validation, handling webhook status updates, and finalizing live bookings.",
  },
];

const Profession = () => {
  return (
    <div className="py-4 md:py-8">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 px-4 md:px-8">
        <Reveal direction="left" className="flex flex-col justify-center max-md:text-center md:pr-10">
          <p className="section-eyebrow">What I Do</p>
          <h2 className="section-title text-slate-900 mb-6">
            Expertise &amp; <span className="text-gradient">Core Focus</span>
          </h2>

          <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              I connect travel platforms to multi-supplier APIs across{" "}
              <strong className="text-sky-700 font-semibold">Hotels, Flights, Cars, Trains, and Payments</strong>{" "}
              with reliable booking flows.
            </p>
            <p>
              Stack:{" "}
              <strong className="text-slate-800">PHP, Laravel, MySQL, PostgreSQL</strong>, plus{" "}
              <strong className="text-slate-800">React.js, Vue.js, and REST APIs</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 max-md:justify-center">
            {["PHP / Laravel", "React.js / Vue", "Hotelbeds API", "Duffel Flight API", "Xmoney Payments", "REST & Webhooks"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <Magnetic className="mt-10 w-fit max-md:mx-auto">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition duration-300 shadow-lg shadow-sky-300/30"
            >
              Say Hello
            </a>
          </Magnetic>
        </Reveal>

        <div className="space-y-3 flex flex-col justify-center">
          {rolesData.map((role, index) => (
            <Reveal key={role.id} direction="right" delay={index * 60}>
              <Roles role={role} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profession;
