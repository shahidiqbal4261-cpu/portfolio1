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
  const [mobileOpen, setMobileOpen] = useState(false);
  const listRef = useRef(null);
  const linkRefs = useRef({});
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    const onPointerDown = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
    const onResize = () => {
      updateIndicator(activeUrl);
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeUrl, updateIndicator]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div
      className={`sticky top-0 ${
        position > 50 || mobileOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg shadow-sky-100/40"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      } z-50 transition-all duration-300`}
    >
      <div
        ref={mobileMenuRef}
        className="relative flex justify-between items-center mx-auto content px-4 lg:px-10 py-3 gap-3"
      >
        <Link
          to="introduction"
          smooth={true}
          duration={800}
          offset={-80}
          onClick={closeMobile}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group min-w-0 flex-1"
        >
          <div className="relative shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-300" />
            <img
              src={logo}
              alt="Shahid Iqbal"
              className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-white shadow-md object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-lg sm:text-2xl font-bold tracking-wide text-slate-900 group-hover:text-sky-600 transition-colors duration-300 truncate">
              Shahid Iqbal
            </p>
            <span className="hidden xs:block text-[10px] sm:text-[11px] text-sky-600 font-medium tracking-wider uppercase -mt-0.5 truncate">
              Full Stack &amp; API Integrations
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center shrink-0">
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
            {navItems.map((item) => (
              <li key={item.id} className="relative">
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
            ))}
          </ul>
          <Magnetic strength={24} className="ml-4">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="block px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 shadow-lg shadow-sky-300/30 hover:shadow-sky-400/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl text-slate-700 bg-sky-50 border border-sky-100 hover:bg-sky-100 transition-colors cursor-pointer"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile panel */}
        <div
          id="mobile-nav-menu"
          className={`lg:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-sky-100/50 overflow-hidden transition-all duration-200 origin-top z-[60] ${
            mobileOpen
              ? "opacity-100 scale-100 visible pointer-events-auto"
              : "opacity-0 scale-95 invisible pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.url}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-100}
                  onSetActive={() => setActiveUrl(item.url)}
                  onClick={closeMobile}
                  className={`block w-full px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-colors ${
                    activeUrl === item.url
                      ? "text-sky-600 bg-sky-50 font-semibold"
                      : "text-slate-700 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-1 pb-1 px-1">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                onClick={closeMobile}
                className="block w-full text-center px-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-300/30 cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dim backdrop on mobile when open */}
      {mobileOpen && (
        <div
          aria-hidden
          className="lg:hidden fixed inset-0 top-[68px] bg-slate-900/20 backdrop-blur-[1px] z-40"
          onClick={closeMobile}
        />
      )}
    </div>
  );
};

export default NavBar;
