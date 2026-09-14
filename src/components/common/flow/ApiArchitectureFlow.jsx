import { useState } from "react";

const flowSteps = [
  {
    step: "01",
    title: "User Search Request",
    tech: "React.js / Mobile App",
    desc: "End user inputs destination, travel dates, passenger count, and room options.",
    icon: "📱",
    color: "from-sky-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Laravel Backend Middleware",
    tech: "PHP / Laravel REST API",
    desc: "Authenticates request, checks query cache, and dispatches parallel HTTP requests.",
    icon: "⚡",
    color: "from-blue-600 to-sky-500",
  },
  {
    step: "03",
    title: "Multi-Supplier API Dispatch",
    tech: "Hotelbeds, Duffel, RateHawk",
    desc: "Parallel async JSON calls query global suppliers for real-time inventory and rates.",
    icon: "🌐",
    color: "from-indigo-600 to-blue-600",
  },
  {
    step: "04",
    title: "Xmoney Payment Gateway",
    tech: "Card & Webhook Listeners",
    desc: "Processes customer payment, validates signature, and triggers settlement webhooks.",
    icon: "💳",
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: "05",
    title: "Booking & E-Ticket Issue",
    tech: "PDF & Instant Voucher",
    desc: "Generates PNR booking voucher, sends confirmation SMS/email, and logs audit record.",
    icon: "🎟️",
    color: "from-sky-400 to-blue-500",
  },
];

const ApiArchitectureFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto my-10 px-2">
      <div className="text-center mb-8">
        <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
          Architecture Pipeline
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          How My <span className="text-gradient">API Booking Engine</span> Works
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {flowSteps.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveStep(idx)}
            className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
              activeStep === idx
                ? "bg-white border-sky-400 shadow-xl shadow-sky-200/60 scale-105 z-20"
                : "bg-white/80 border-slate-200/80 hover:border-sky-300 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-xs font-black px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${item.color}`}>
                STEP {item.step}
              </span>
            </div>

            <h4 className="text-slate-900 font-bold text-sm mb-1 line-clamp-1">
              {item.title}
            </h4>

            <p className="text-sky-600 text-[11px] font-semibold mb-2">
              {item.tech}
            </p>

            <p className="text-slate-500 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiArchitectureFlow;
