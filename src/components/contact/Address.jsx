import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCopy, faCheck, faPhone, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);
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
            className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white border border-sky-200 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
            title="Copy Email Address"
          >
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-emerald-400" : ""} />
            {copied ? "Copied!" : "Copy"}
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
            className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-500 text-emerald-700 hover:text-white border border-emerald-200 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
            title="Call Now"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call Now
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
    <div
      className="p-4 sm:p-5 flex items-center rounded-2xl bg-white border border-slate-100 shadow-sm shadow-sky-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:border-sky-300 hover:shadow-md hover:shadow-sky-200/60 max-sm:mx-auto group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-12 w-12 flex items-center justify-center shrink-0 transition-colors duration-300 ${
          hover ? "bg-sky-500 text-white shadow-md shadow-sky-300/40" : "bg-sky-50 text-sky-600 border border-sky-100"
        } rounded-xl`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className="text-lg md:text-xl"
        />
      </div>
      <div className="ms-4 flex-1">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
          {item?.title}:
        </p>
        <div className="text-base text-slate-900 font-semibold">
          {renderDescription()}
        </div>
      </div>
    </div>
  );
};

export default Address;
