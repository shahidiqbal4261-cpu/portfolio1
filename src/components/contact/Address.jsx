import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCopy, faCheck, faPhone, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Address = ({ item }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderDescription = () => {
    if (item?.title === "My Email") {
      return (
        <div className="flex items-center gap-2 flex-wrap mt-0.5">
          <a
            href={`mailto:${item?.description}`}
            className="hover:underline text-sky-600 font-semibold text-sm sm:text-base"
          >
            {item?.description}
          </a>
          <button
            onClick={(e) => handleCopy(e, item?.description)}
            className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white border border-sky-200 text-xs font-semibold transition flex items-center gap-1 cursor-pointer"
            title="Copy Email Address"
          >
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      );
    }
    if (item?.title === "Call Me Now") {
      return (
        <div className="flex items-center gap-2 flex-wrap mt-0.5">
          <a
            href={`tel:${item?.description}`}
            className="hover:underline text-sky-600 font-semibold text-sm sm:text-base"
          >
            {item?.description}
          </a>
          <a
            href={`tel:${item?.description}`}
            className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white border border-sky-200 text-xs font-semibold transition flex items-center gap-1 cursor-pointer"
            title="Call Now"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call
          </a>
        </div>
      );
    }
    return (
      <a
        href={item?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-slate-800 font-semibold text-sm sm:text-base inline-flex items-center gap-1 mt-0.5"
      >
        {item?.description}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs text-slate-400 ms-1" />
      </a>
    );
  };

  return (
    <div className="p-4 sm:p-5 flex items-center rounded-xl bg-white border border-slate-100 transition-colors duration-200 hover:border-sky-300 max-sm:mx-auto">
      <div className="h-11 w-11 flex items-center justify-center shrink-0 bg-sky-50 text-sky-600 border border-sky-100 rounded-xl">
        <FontAwesomeIcon icon={item?.icon} className="text-lg" />
      </div>
      <div className="ms-4 flex-1 min-w-0">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
          {item?.title}
        </p>
        <div className="text-base text-slate-900 font-semibold">
          {renderDescription()}
        </div>
      </div>
    </div>
  );
};

export default Address;
