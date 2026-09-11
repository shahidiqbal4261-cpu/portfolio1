import logo from "../../../assets/logo.jpg";
import { Link } from "react-scroll";

/* Footer navLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 content max-2xl:px-4 text-slate-600 border-t border-slate-100 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <Link
          to="introduction"
          smooth={true}
          duration={900}
          className="flex items-center gap-3 border-0 cursor-pointer group"
        >
          <img
            src={logo}
            alt="Shahid Iqbal"
            className="h-11 w-11 rounded-full border-2 border-slate-100 group-hover:border-sky-400 transition-all duration-300 object-cover"
          />
          <p className="text-xl sm:text-2xl font-bold tracking-wide text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
            Shahid Iqbal
          </p>
        </Link>

        <nav className="flex flex-wrap justify-center gap-6 text-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              smooth={true}
              duration={900}
              offset={-80}
              spy={true}
              activeClass="text-sky-600 font-semibold"
              className="text-sm sm:text-base font-medium text-slate-500 hover:text-sky-600 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <p className="text-xs sm:text-sm text-slate-400">
          © {copyrightYear} Shahid Iqbal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
