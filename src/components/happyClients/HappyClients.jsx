import Marquee from "react-fast-marquee";
import { FaReact, FaLaravel, FaPhp, FaVuejs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiJavascript, SiPostman } from "react-icons/si";
import Reveal from "../common/reveal/Reveal";

const iconClass = "h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 text-slate-400 hover:text-sky-500 transition-colors duration-300";

const techLogos = [
  { icon: <FaPhp className={`${iconClass} hover:!text-blue-600`} />, label: "PHP" },
  { icon: <FaLaravel className={`${iconClass} hover:!text-red-500`} />, label: "Laravel" },
  { icon: <SiMysql className={`${iconClass} hover:!text-blue-500`} />, label: "MySQL" },
  { icon: <SiPostgresql className={`${iconClass} hover:!text-sky-500`} />, label: "PostgreSQL" },
  { icon: <SiJavascript className={`${iconClass} hover:!text-yellow-500`} />, label: "JavaScript" },
  { icon: <FaReact className={`${iconClass} hover:!text-cyan-500`} />, label: "React.js" },
  { icon: <FaVuejs className={`${iconClass} hover:!text-emerald-500`} />, label: "Vue.js" },
  { icon: <SiTailwindcss className={`${iconClass} hover:!text-sky-500`} />, label: "TailwindCSS" },
  { icon: <SiPostman className={`${iconClass} hover:!text-orange-500`} />, label: "REST APIs" },
  { icon: <FaHtml5 className={`${iconClass} hover:!text-orange-500`} />, label: "HTML5" },
  { icon: <FaCss3Alt className={`${iconClass} hover:!text-blue-500`} />, label: "CSS3" },
  { icon: <FaGithub className={`${iconClass} hover:!text-slate-800`} />, label: "Git" },
];

const SkillsShowcase = () => {
  return (
    <div className="content py-10 md:py-16 flex flex-col items-center px-2">
      <Reveal className="max-w-144.25 text-center">
        <p className="section-title mb-6 text-slate-900">Technologies I Use</p>
        <p className="text-[14px] sm:text-lg text-slate-500 font-normal">
          The core stack behind every third-party API integration and booking platform I build.
        </p>
      </Reveal>
      <Marquee pauseOnHover={true} speed={60} gradient={true} gradientColor="#ffffff" gradientWidth={80}>
        <p className="flex items-center pt-4 md:pt-10">
          {techLogos?.map((tech, index) => (
            <span className="ps-6 sm:ps-10 md:ps-20 flex flex-col items-center gap-2" key={index} title={tech.label}>
              {tech.icon}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default SkillsShowcase;
