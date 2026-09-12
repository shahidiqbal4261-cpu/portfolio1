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
    <section
      className="bg-white py-12 md:py-20"
      id="services"
    >
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 px-4 md:px-8">

        {/* Left Section */}
        <Reveal direction="left" className="flex flex-col justify-center max-md:text-center md:pr-10">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-600 mb-2">
            What I Do?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            My Expertise &amp; <span className="text-gradient">Core Focus</span>
          </h2>

          <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              I specialize in connecting travel platforms to multi-supplier APIs across{" "}
              <strong className="text-sky-600">Hotels, Flights, Cars, Trains, and Payments</strong>, ensuring fast and reliable booking flows.
            </p>
            <p>
              My stack centers around{" "}
              <strong className="text-blue-700">PHP, Laravel, MySQL, PostgreSQL</strong>, alongside{" "}
              <strong className="text-blue-700">React.js, Vue.js, and RESTful API Architecture</strong>.
            </p>
          </div>

          <Magnetic className="mt-10 w-fit max-md:mx-auto">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition duration-300 shadow-lg shadow-sky-300/30"
            >
              Say Hello 👋
            </a>
          </Magnetic>
        </Reveal>

        {/* Right Section */}
        <div className="space-y-4">
          {rolesData.map((role, index) => (
            <Reveal key={role.id} direction="right" delay={index * 80}>
              <Roles role={role} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profession;
