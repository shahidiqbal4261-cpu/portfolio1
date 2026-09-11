import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faMapPin, faTicket, faCheckDouble, faClock } from "@fortawesome/free-solid-svg-icons";

const RailBookingVisual = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950 p-4 sm:p-5 flex items-center justify-between overflow-hidden group-hover:scale-105 transition-transform duration-700 select-none">
      {/* Ambient Lighting */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl"></div>

      {/* Left: Rail Route UI Card */}
      <div className="relative z-10 w-[46%] h-full bg-slate-900 border border-slate-700/80 rounded-xl p-2.5 flex flex-col justify-between shadow-xl shadow-slate-950/60 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1 text-[9px]">
          <span className="font-bold text-sky-300 flex items-center gap-1">
            <FontAwesomeIcon icon={faTrain} className="text-sky-400" /> High-Speed Rail
          </span>
          <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold text-[8px] border border-sky-500/30">
            Jakarta &amp; China
          </span>
        </div>

        {/* Route Card Graphic */}
        <div className="bg-slate-800/90 rounded-lg p-2 border border-slate-700/60 space-y-1 my-1">
          <div className="flex items-center justify-between text-[8px] text-slate-300 font-semibold">
            <span className="flex items-center gap-0.5 text-sky-400">
              <FontAwesomeIcon icon={faMapPin} className="text-[8px]" /> Jakarta Central
            </span>
            <span>→</span>
            <span className="flex items-center gap-0.5 text-indigo-300">
              <FontAwesomeIcon icon={faMapPin} className="text-[8px]" /> Bandung Express
            </span>
          </div>
          <div className="flex items-center justify-between text-[8px] text-slate-400 pt-0.5">
            <span className="flex items-center gap-0.5">
              <FontAwesomeIcon icon={faClock} className="text-[7px]" /> 08:30 AM
            </span>
            <span className="text-emerald-400 font-mono">Seat 04A (Confirmed)</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[8px] text-slate-400">
          <span className="text-slate-300 font-medium flex items-center gap-1">
            <FontAwesomeIcon icon={faTicket} className="text-sky-400 text-[8px]" /> E-Ticket Issued
          </span>
          <span className="text-emerald-400 font-bold">200 OK</span>
        </div>
      </div>

      {/* Right: Rail API Inspection Terminal */}
      <div className="relative z-10 w-[50%] h-full bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 flex flex-col justify-between shadow-2xl font-mono text-[9px] transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5 mb-1.5">
          <span className="text-[9px] font-bold text-slate-200">Rail Network API Integration</span>
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Live Stream
          </span>
        </div>

        <div className="space-y-1 font-mono text-[8px] leading-tight text-slate-300">
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-sky-400 font-bold">GET /api/rail/schedules</span>
            <span className="text-emerald-400 font-semibold">200 OK</span>
          </div>
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-slate-300">Live Seat Map Parse</span>
            <span className="text-emerald-400 font-semibold">Mapped</span>
          </div>
          <div className="flex items-center justify-between bg-slate-900/90 p-1 rounded border border-slate-800">
            <span className="text-indigo-300 font-bold">POST /api/rail/ticket/book</span>
            <span className="text-emerald-400 font-semibold">201 Created</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-400">
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <FontAwesomeIcon icon={faCheckDouble} className="text-[9px]" /> Fare &amp; Route Sync
          </span>
          <span className="text-sky-300 font-bold">Real-time</span>
        </div>
      </div>
    </div>
  );
};

export default RailBookingVisual;
