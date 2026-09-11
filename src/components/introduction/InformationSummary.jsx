import CountUp from "../common/countUp/CountUp";

const InformationSummary = ({ item }) => {
  return (
    <div
      className="bg-white border border-slate-100 backdrop-blur-md rounded-xl text-center p-3 sm:p-4 shadow-md shadow-sky-100/60 transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-200/70 hover:scale-[1.03] hover:-translate-y-0.5"
    >
      {/* Description (The main number/stat) */}
      <p className="text-2xl sm:text-3xl font-extrabold text-gradient">
        <CountUp value={item.description} />
      </p>

      {/* Title (The label below the stat) */}
      <p className="text-xs sm:text-sm font-medium mt-1 text-slate-500">
        {item.title}
      </p>
    </div>
  );
};

export default InformationSummary;