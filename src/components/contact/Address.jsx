import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  // Create clickable links for email & phone
  const renderDescription = () => {
    if (item?.title === "My Email") {
      return (
        <a
          href={`mailto:${item?.description}`}
          className="hover:underline text-sky-600 font-medium"
        >
          {item?.description}
        </a>
      );
    }
    if (item?.title === "Call Me Now") {
      return (
        <a
          href={`tel:${item?.description}`}
          className="hover:underline text-sky-600 font-medium"
        >
          {item?.description}
        </a>
      );
    }
    return item?.description;
  };

  return (
    <div
      className="p-4 sm:p-5 flex items-center rounded-2xl bg-white border border-slate-100 shadow-sm shadow-sky-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:border-sky-300 hover:shadow-md hover:shadow-sky-200/60 max-sm:mx-auto group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-12 w-12 flex items-center justify-center transition-colors duration-300 ${
          hover ? "bg-sky-500 text-white shadow-md shadow-sky-300/40" : "bg-sky-50 text-sky-600 border border-sky-100"
        } rounded-xl`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className="text-lg md:text-xl"
        />
      </div>
      <div className="ms-4">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
          {item?.title}:
        </p>
        <p className="text-base text-slate-900 font-semibold">
          {renderDescription()}
        </p>
      </div>
    </div>
  );
};

export default Address;
