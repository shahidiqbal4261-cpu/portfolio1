const DevStatusBar = () => {
  return (
    <div className="w-full bg-slate-950 border-t border-slate-800/80 px-4 py-2.5 text-slate-400 font-mono text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        {/* Status System */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>API Services: 100% Operational</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <span>⚡ Latency:</span>
            <span className="text-sky-400 font-bold">114ms</span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-slate-400">
            <span>📍 Location:</span>
            <span className="text-slate-200">Lahore, Pakistan</span>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold">💼 Status:</span>
          <span className="text-slate-200">Open for Contract &amp; Senior Engineering Roles</span>
        </div>
      </div>
    </div>
  );
};

export default DevStatusBar;
