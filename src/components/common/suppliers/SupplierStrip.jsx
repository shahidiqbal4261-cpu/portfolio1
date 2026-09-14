import Reveal from "../reveal/Reveal";

const suppliers = [
  { name: "Hotelbeds", type: "Hotels" },
  { name: "Travelpayouts", type: "Hotels" },
  { name: "RateHawk", type: "Hotels" },
  { name: "Wanderbeds", type: "Hotels" },
  { name: "TourBMS", type: "Hotels" },
  { name: "Duffel", type: "Flights" },
  { name: "Mozio", type: "Cars" },
  { name: "Xmoney", type: "Payments" },
  { name: "China Rail", type: "Rail" },
  { name: "Jakarta Rail", type: "Rail" },
];

const SupplierStrip = () => {
  return (
    <div className="content px-4 md:px-8 py-4">
      <Reveal className="text-center mb-8 max-w-2xl mx-auto">
        <p className="section-eyebrow">Production APIs</p>
        <h2 className="section-title text-slate-900 text-2xl sm:text-3xl md:text-4xl">
          Suppliers I&apos;ve <span className="text-gradient">Integrated</span>
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base">
          Real third-party travel and payment APIs shipped in production booking flows.
        </p>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {suppliers.map((item) => (
          <div
            key={item.name}
            className="px-4 py-3 rounded-xl bg-white border border-slate-100 shadow-sm min-w-[140px] text-center transition-colors duration-200 hover:border-sky-300"
          >
            <p className="text-sm font-bold text-slate-900">{item.name}</p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-600 mt-0.5">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierStrip;
