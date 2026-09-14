import { useState, useEffect } from "react";

const apiEndpoints = [
  {
    id: "duffel",
    name: "Duffel Flights",
    method: "POST",
    url: "https://api.duffel.com/air/offer_requests",
    status: "200 OK",
    latency: "118ms",
    request: {
      slices: [{ origin: "LHR", destination: "DXB", departure_date: "2026-10-15" }],
      passengers: [{ type: "adult" }],
      cabin_class: "business",
    },
    response: {
      status: 200,
      data: {
        offer_id: "off_0000A1b2C3",
        airline: "Emirates (EK)",
        flight_number: "EK-008",
        price: { total_amount: "840.00", currency: "USD" },
        seats_remaining: 4,
        instant_booking: true,
      },
    },
  },
  {
    id: "hotelbeds",
    name: "Hotelbeds Supply",
    method: "POST",
    url: "https://api.hotelbeds.com/hotel-api/1.0/hotels",
    status: "200 OK",
    latency: "145ms",
    request: {
      stay: { checkIn: "2026-11-01", checkOut: "2026-11-05" },
      occupancies: [{ rooms: 1, adults: 2, children: 0 }],
      destination: { code: "DXB" },
    },
    response: {
      status: 200,
      hotels: [
        { code: 14209, name: "Burj Al Arab Luxury Suite", rate: "1,250.00 USD", status: "CONFIRMED" },
      ],
    },
  },
  {
    id: "xmoney",
    name: "Xmoney Payments",
    method: "POST",
    url: "https://api.xmoney.com/v1/payments/charge",
    status: "200 OK",
    latency: "92ms",
    request: {
      amount: "840.00",
      currency: "USD",
      order_id: "ORD-98421",
      payment_method: "credit_card",
      webhook_url: "https://api.portfolio.com/webhooks/xmoney",
    },
    response: {
      status: 200,
      transaction_id: "txn_xm_9948271",
      payment_status: "COMPLETED",
      settlement_currency: "USD",
      webhook_delivered: true,
    },
  },
  {
    id: "rail",
    name: "Rail Schedules",
    method: "GET",
    url: "https://api.railengine.com/v2/schedules?from=JKT&to=BDG",
    status: "200 OK",
    latency: "84ms",
    request: {
      origin: "Jakarta (JKT)",
      destination: "Bandung (BDG)",
      train_type: "High Speed Bullet Train",
    },
    response: {
      status: 200,
      route: "Whoosh Bullet Rail",
      departure: "08:30 WIB",
      arrival: "09:15 WIB",
      available_classes: ["First Class", "VIP Suite"],
    },
  },
];

const ApiTerminalPlayground = () => {
  const [activeTab, setActiveTab] = useState(apiEndpoints[0]);
  const [isCopied, setIsCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const fullText = JSON.stringify(activeTab.response, null, 2);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayedText(fullText);
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      index += 3;
      if (index >= fullText.length) {
        setDisplayedText(fullText);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayedText(fullText.slice(0, index));
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activeTab, fullText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs sm:text-sm text-slate-200">
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden>
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500/80 inline-block" />
          </div>
          <span className="text-slate-400 text-xs font-medium ms-2">
            api-integration-sandbox
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[11px] font-semibold">
            {activeTab.status} · {activeTab.latency}
          </span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition cursor-pointer"
          >
            {isCopied ? "Copied" : "Copy payload"}
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 px-2 pt-2 border-b border-slate-800 flex items-center gap-1 overflow-x-auto">
        {apiEndpoints.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-semibold text-xs transition-colors whitespace-nowrap cursor-pointer ${
              activeTab.id === tab.id
                ? "bg-slate-950 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/90">
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-2 gap-2">
            <span className="font-bold text-sky-400">{activeTab.method}</span>
            <span className="truncate max-w-[200px] text-slate-500">{activeTab.url}</span>
          </div>
          <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-2">
            Request
          </p>
          <pre className="text-sky-300/90 whitespace-pre-wrap font-mono text-xs overflow-x-auto leading-relaxed">
            {JSON.stringify(activeTab.request, null, 2)}
          </pre>
        </div>

        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
            <span className="font-bold text-sky-300">Response</span>
            <span className="text-slate-500">application/json</span>
          </div>
          <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-2">
            Server payload
          </p>
          <pre className="text-sky-200/90 whitespace-pre-wrap font-mono text-xs overflow-x-auto leading-relaxed min-h-[140px]">
            {displayedText}
            {isTyping && <span className="inline-block w-1.5 h-3.5 bg-sky-400 ms-1 align-middle" />}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ApiTerminalPlayground;
