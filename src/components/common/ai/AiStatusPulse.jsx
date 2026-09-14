const AiStatusPulse = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold shadow-sm shadow-sky-100 hover:border-sky-400 hover:shadow-md transition-all duration-300 group cursor-pointer">
      {/* 2026 AI Audio Equalizer Waveform */}
      <div className="flex items-center gap-0.5 h-3">
        <span className="w-0.5 bg-sky-500 rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
        <span className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_1s_infinite_300ms] h-3/4" />
        <span className="w-0.5 bg-blue-600 rounded-full animate-[bounce_1s_infinite_200ms] h-full" />
        <span className="w-0.5 bg-sky-400 rounded-full animate-[bounce_1s_infinite_400ms] h-1/2" />
      </div>

      <span className="text-slate-800 font-bold group-hover:text-sky-600 transition-colors">
        Available for Contract &amp; Senior Engineering Roles
      </span>
    </div>
  );
};

export default AiStatusPulse;
