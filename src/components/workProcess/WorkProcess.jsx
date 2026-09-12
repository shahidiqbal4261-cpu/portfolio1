import { useRef } from "react";
import WorkSteps from "./WorkSteps";
import Reveal from "../common/reveal/Reveal";
import ProcessPath from "./ProcessPath";
import { faProjectDiagram, faCode, faBug, faRocket } from "@fortawesome/free-solid-svg-icons";

const workStepData = [
  {
    id: 1,
    title: "Planning",
    description:
      "Understand client requirements, define features, and design a scalable project structure.",
    icon: faProjectDiagram,
  },
  {
    id: 2,
    title: "Development",
    description:
      "Build responsive and user-friendly applications using React.js, Laravel, APIs, and modern UI frameworks.",
    icon: faCode,
  },
  {
    id: 3,
    title: "Testing",
    description:
      "Debug, optimize, and ensure seamless performance across devices and browsers.",
    icon: faBug,
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Deploy applications on servers or cloud platforms, ensuring scalability and security.",
    icon: faRocket,
  },
];

const WorkProcess = () => {
  const gridRef = useRef(null);
  const stepRefs = useRef([]);

  return (
    <section
      id="work-process"
      className="relative py-12 px-4 sm:px-8 lg:px-16"
    >
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <Reveal direction="left">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-600 mb-2">
            Methodology &amp; Workflow
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            My Engineering <span className="text-gradient">Work Process</span>
          </h2>

          <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
            From API authentication to live webhook updates, I follow a structured engineering workflow that guarantees code reliability, response sanitization, and seamless API performance.
          </p>

          <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
            My process blends clean architecture, API data mapping, and rigorous error handling to build integrations that run smoothly at production scale.
          </p>
        </Reveal>

        {/* Right Work Steps Grid */}
        <div ref={gridRef} className="relative grid sm:grid-cols-2 gap-6">
          <ProcessPath containerRef={gridRef} itemRefs={stepRefs} count={workStepData.length} />
          {workStepData.map((data, index) => (
            <div key={index} ref={(el) => (stepRefs.current[index] = el)} className="relative z-[1]">
              <Reveal delay={index * 100} direction="right">
                <WorkSteps data={data} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
