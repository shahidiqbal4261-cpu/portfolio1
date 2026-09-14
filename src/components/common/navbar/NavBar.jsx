import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-scroll";
import Magnetic from "../magnetic/Magnetic";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Portfolio", url: "portfolio" },
  { id: 4, name: "Expertise", url: "profession" },
  { id: 5, name: "Notes", url: "notes" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [activeUrl, setActiveUrl] = useState("introduction");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const listRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateIndicator = useCallback((url) => {
    const linkEl = linkRefs.current[url];
    const listEl = listRef.current;
    if (!linkEl || !listEl) return;

    const listRect = listEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - listRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    updateIndicator(activeUrl);
  }, [activeUrl, updateIndicator]);

  useEffect(() => {
    const onResize = () => updateIndicator(activeUrl);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeUrl, updateIndicator]);

  const menu = navItems.map((item) => (
    <li key={item.id} className="relative" onMouseDown={(e) => e.preventDefault()}>
      <Link
        to={item.url}
        smooth={true}
        duration={800}
        spy={true}
        offset={-120}
        onSetActive={() => setActiveUrl(item.url)}
        className={`relative z-10 block px-4 py-2 mx-0.5 cursor-pointer transition-colors duration-300 rounded-md ${
          activeUrl === item.url
            ? "text-sky-600 font-semibold"
            : "text-slate-600 hover:text-sky-600"
        }`}
      >
        <span
          ref={(el) => {
            linkRefs.current[item.url] = el;
          }}
          className="inline-block"
        >
          {item.name}
        </span>
      </Link>
    </li>
  ));

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-lg shadow-sky-100/40"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      } z-50 transition-all duration-500`}
    >
      <div className="navbar flex justify-between items-center mx-auto content px-4 lg:px-10 py-3">
        <Link
          to="introduction"
          smooth={true}
          duration={800}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-300" />
            <img
              src={logo}
              alt="Shahid Iqbal"
              className="relative h-11 w-11 rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-all duration-300 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
              Shahid Iqbal
            </p>
            <span className="text-[11px] text-sky-600 font-medium tracking-wider uppercase -mt-1">
              Full Stack &amp; API Integrations
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center">
          <ul ref={listRef} className="relative flex items-center text-[15px] font-medium">
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0.5 h-0.5 rounded-full bg-sky-500 transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
            {menu}
          </ul>
          <Magnetic strength={24} className="ml-4">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="block px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 shadow-lg shadow-sky-300/30 hover:shadow-sky-400/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
          </Magnetic>
        </div>

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-slate-600 hover:bg-sky-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content rounded-xl z-10 mt-3 w-56 p-3 shadow-2xl font-medium bg-white border border-slate-100 text-slate-600 space-y-1"
          >
            {navItems.map((item) => (
              <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                <Link
                  to={item.url}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-120}
                  onSetActive={() => setActiveUrl(item.url)}
                  className={`px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 ${
                    activeUrl === item.url
                      ? "text-sky-600 font-semibold bg-sky-50"
                      : "hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="w-full text-center px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-600 shadow hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
