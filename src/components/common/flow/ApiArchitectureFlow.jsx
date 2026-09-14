import { useEffect, useRef, useState } from "react";

const flowSteps = [
  {
    step: "01",
    title: "User Search",
    tech: "React / Mobile",
    desc: "Destination, dates, passengers, and room options enter the booking flow.",
  },
  {
    step: "02",
    title: "Laravel Middleware",
    tech: "PHP / REST API",
    desc: "Auth, cache check, and parallel supplier HTTP dispatch.",
  },
  {
    step: "03",
    title: "Multi-Supplier APIs",
    tech: "Hotelbeds, Duffel, RateHawk",
    desc: "Async JSON calls pull live inventory and rates.",
  },
  {
    step: "04",
    title: "Payment Gateway",
    tech: "Xmoney + Webhooks",
    desc: "Charge, signature validation, and settlement callbacks.",
  },
  {
    step: "05",
    title: "Booking Issued",
    tech: "PNR & Voucher",
    desc: "Confirmation email/SMS and audit logging complete the flow.",
  },
];

const ApiArchitectureFlow = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setRevealedCount(flowSteps.length);
      setActiveStep(flowSteps.length - 1);
      return;
    }

    let step = 0;
    setRevealedCount(1);
    setActiveStep(0);

    const timer = setInterval(() => {
      step += 1;
      if (step >= flowSteps.length) {
        clearInterval(timer);
        return;
      }
      setRevealedCount(step + 1);
      setActiveStep(step);
    }, 280);

    return () => clearInterval(timer);
  }, [inView, reduceMotion]);

  const lineProgress =
    revealedCount <= 1
      ? 0
      : ((revealedCount - 1) / (flowSteps.length - 1)) * 100;

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto my-10 px-2">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Architecture Pipeline</p>
        <h3 className="section-title text-2xl sm:text-3xl text-slate-900">
          How the <span className="text-gradient">API Booking Engine</span> Works
        </h3>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
        {/* Desktop connector track */}
        <div
          aria-hidden
          className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-sky-100 z-0 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-sky-600 origin-left transition-[width] duration-500 ease-out"
            style={{ width: `${lineProgress}%` }}
          />
        </div>

        {flowSteps.map((item, idx) => {
          const revealed = idx < revealedCount;
          const isActive = activeStep === idx;

          return (
            <li
              key={item.step}
              onMouseEnter={() => revealed && setActiveStep(idx)}
              className={`relative flex md:flex-col gap-4 md:gap-0 p-4 md:p-3 cursor-pointer group transition-all duration-500 ease-out ${
                revealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: reduceMotion ? "0ms" : `${idx * 60}ms`,
              }}
            >
              <div className="relative z-10 flex md:flex-col md:items-center gap-3 shrink-0">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border transition-all duration-300 ${
                    isActive && revealed
                      ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-300/40 scale-110"
                      : revealed
                      ? "bg-white text-sky-700 border-sky-200 group-hover:border-sky-400"
                      : "bg-slate-50 text-slate-400 border-slate-200"
                  }`}
                >
                  {item.step}
                </span>
              </div>

              <div className="md:text-center md:mt-4 min-w-0">
                <h4
                  className={`font-bold text-sm mb-1 transition-colors duration-300 ${
                    isActive ? "text-sky-700" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-sky-600 text-[11px] font-semibold mb-2">
                  {item.tech}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ApiArchitectureFlow;
