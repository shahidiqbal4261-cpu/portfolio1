import CountUp from "../common/countUp/CountUp";

const InformationSummary = ({ item, delay = 0 }) => {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-xl text-center p-3 sm:p-4 transition-all duration-300 hover:border-sky-200 hover:bg-white hover:shadow-sm hover:shadow-sky-100/60">
      <p className="text-2xl sm:text-3xl font-extrabold text-gradient tabular-nums">
        <CountUp value={item.description} delay={delay} />
      </p>
      <p className="text-xs sm:text-sm font-medium mt-1 text-slate-500">
        {item.title}
      </p>
    </div>
  );
};

export default InformationSummary;
