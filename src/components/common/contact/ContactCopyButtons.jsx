import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const ContactCopyButtons = () => {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 my-4">
      {/* Email Copy Button */}
      <button
        onClick={() => copyToClipboard("shahidiqbal4261@gmail.com", "email")}
        className="px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-400/50 text-slate-200 hover:text-sky-300 flex items-center justify-between gap-3 text-xs sm:text-sm font-mono transition-all duration-300 shadow-md group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-sky-400" />
          <span>shahidiqbal4261@gmail.com</span>
        </div>
        <span className="px-2 py-1 rounded bg-slate-800 text-[11px] font-sans font-bold text-slate-400 group-hover:text-white flex items-center gap-1">
          <FontAwesomeIcon icon={copiedType === "email" ? faCheck : faCopy} className={copiedType === "email" ? "text-emerald-400" : ""} />
          {copiedType === "email" ? "Copied!" : "Copy"}
        </span>
      </button>

      {/* Phone Copy Button */}
      <button
        onClick={() => copyToClipboard("+923055668426", "phone")}
        className="px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-400/50 text-slate-200 hover:text-sky-300 flex items-center justify-between gap-3 text-xs sm:text-sm font-mono transition-all duration-300 shadow-md group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-emerald-400" />
          <span>+92 305 5668426</span>
        </div>
        <span className="px-2 py-1 rounded bg-slate-800 text-[11px] font-sans font-bold text-slate-400 group-hover:text-white flex items-center gap-1">
          <FontAwesomeIcon icon={copiedType === "phone" ? faCheck : faCopy} className={copiedType === "phone" ? "text-emerald-400" : ""} />
          {copiedType === "phone" ? "Copied!" : "Copy"}
        </span>
      </button>

      {/* Toast Notification */}
      {copiedType && (
        <div className="fixed bottom-10 right-6 z-[99999] px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-2xl flex items-center gap-2 animate-[fadeInUp_0.3s_ease-out]">
          <span>📋</span> Copied {copiedType === "email" ? "Email" : "Phone number"} to clipboard!
        </div>
      )}
    </div>
  );
};

export default ContactCopyButtons;
