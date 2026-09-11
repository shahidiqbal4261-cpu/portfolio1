import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faServer, faCheckCircle, faBolt, faLock } from "@fortawesome/free-solid-svg-icons";

const MobileAppApiVisual = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-4 sm:p-5 flex items-center justify-between overflow-hidden group-hover:scale-105 transition-transform duration-700 select-none">
      {/* Ambient Radial Lighting */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl"></div>

      {/* Left: Mobile App Mockup Frame */}
      <div className="relative z-10 w-[46%] h-full bg-slate-900 border border-slate-700/80 rounded-xl p-2 flex flex-col justify-between shadow-xl shadow-slate-950/60 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
        {/* Notch & Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1 px-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span className="text-[9px] font-bold text-slate-300">PHPTravels App</span>
          </div>
          <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            v2.4 Live
          </span>
        </div>

        {/* Mobile Search Card UI */}
        <div className="space-y-1.5 flex-1 flex flex-col justify-center">
          <div className="bg-slate-800/90 rounded-lg p-1.5 border border-slate-700/60">
            <p className="text-[8px] font-semibold text-sky-400 uppercase">Search Hotels &amp; Flights</p>
            <div className="flex items-center justify-between text-[9px] text-slate-200 mt-0.5">
              <span>Lahore → Dubai</span>
              <span className="text-emerald-400 font-mono">⚡ 45ms</span>
            </div>
          </div>

          <div className="bg-indigo-950/80 rounded-lg p-1.5 border border-indigo-700/50">
            <div className="flex items-center justify-between text-[8px]">
              <span className="text-slate-300 font-medium">Token Auth Session</span>
              <span className="text-sky-300 font-mono">Active</span>
            </div>
            <p className="text-[7px] text-slate-400 truncate font-mono mt-0.5">Bearer eyJhbGciOiJIUzI1Ni...</p>
          </div>
        </div>

        {/* App Footer */}
        <div className="flex items-center justify-around pt-1 border-t border-slate-800 text-[8px] text-slate-400">
          <span className="text-sky-400 font-semibold flex items-center gap-0.5">
            <FontAwesomeIcon icon={faMobileScreen} className="text-[9px]" /> Mobile
          </span>
          <span className="flex items-center gap-0.5">
            <FontAwesomeIcon icon={faLock} className="text-[8px]" /> Secure
          </span>
        </div>
      </div>

      {/* Right: REST API Server Log Terminal */}
      <div className="relative z-10 w-[50%] h-full bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 flex flex-col justify-between shadow-2xl font-mono text-[9px] transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5 mb-1.5">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faServer} className="text-sky-400 text-[10px]" />
            <span className="text-[9px] font-bold text-slate-200">REST API Engine</span>
          </div>
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-0.5">
            <FontAwesomeIcon icon={faBolt} className="text-[8px] text-amber-400" /> RESTful
          </span>
        </div>

        {/* Live Endpoint Log */}
        <div className="space-y-1 font-mono text-[8px] leading-tight text-slate-300">
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-emerald-400 font-bold">POST /api/v1/app/login</span>
            <span className="text-emerald-400 font-semibold">200 OK</span>
          </div>
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-sky-400 font-bold">GET /api/v1/hotels/search</span>
            <span className="text-sky-400 font-semibold">38ms</span>
          </div>
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-purple-400 font-bold">POST /api/v1/booking/create</span>
            <span className="text-emerald-400 font-semibold">201 Created</span>
          </div>
        </div>

        {/* API Response Status */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-400">
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <FontAwesomeIcon icon={faCheckCircle} className="text-[9px]" /> Mobile Network Sync
          </span>
          <span className="text-sky-400 font-bold">100% Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default MobileAppApiVisual;
