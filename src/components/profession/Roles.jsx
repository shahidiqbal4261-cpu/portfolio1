const Roles = ({ role }) => {
  return (
    <div className="p-5 sm:p-6 bg-white border border-slate-100 rounded-xl my-0 flex relative overflow-hidden group hover:border-sky-300 transition-colors duration-200">
      <span className="bg-sky-500 absolute left-0 top-0 h-full w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        <p className="text-lg sm:text-xl font-bold text-slate-900 pb-1.5 group-hover:text-sky-600 transition-colors duration-200">
          {role?.title}
        </p>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
