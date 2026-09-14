import { useState } from "react";
import Projects from "./Projects";
import ProjectModal from "./ProjectModal";
import Reveal from "../common/reveal/Reveal";
import skyvelaImg from "../../assets/images/portfolio-images/skyvela_preview.png";
import phptravelsImg from "../../assets/images/portfolio-images/phptravels_api_preview.png";
import umrahImg from "../../assets/images/portfolio-images/umrah_system_preview.png";
import MobileAppApiVisual from "./MobileAppApiVisual";
import PaymentGatewayVisual from "./PaymentGatewayVisual";
import RailBookingVisual from "./RailBookingVisual";

const projectData = [
  {
    id: 1,
    image: skyvelaImg,
    category: "PHP / MYSQL / MULTI-SUPPLIER APIs",
    tags: ["PHP", "MySQL", "Hotelbeds", "Duffel", "Mozio"],
    title: "Skyvela – Unified Travel Platform",
    description:
      "Designed and built backend layer merging hotel, flight, and car rental APIs into one searchable system with JSON response normalization.",
    highlights: [
      "Built a normalization layer mapping each supplier's JSON response into one consistent internal data model.",
      "Handled cross-supplier checkout — a single booking can create orders against multiple supplier APIs (e.g. a hotel via Hotelbeds and a car via Mozio) and track each independently.",
      "Implemented webhook handling so booking status changes from any connected supplier update the unified booking record in real time.",
    ],
    link: "#!",
  },
  {
    id: 2,
    image: phptravelsImg,
    category: "PHP / REST APIs / WEBHOOKS",
    tags: ["Travelpayouts", "Hotelbeds", "RateHawk", "Webhooks"],
    title: "PHPTravels Multi-Supplier Integration",
    description:
      "Integrated Travelpayouts, Hotelbeds, Wanderbeds, RateHawk, TourBMS, Duffel, Mozio & Xmoney into PHPTravels with live webhook status listeners.",
    highlights: [
      "Connected the Travelpayouts REST API with token-based auth, mapping supplier fields into the platform's internal hotel schema.",
      "Reconciled overlapping hotel content between Hotelbeds and Travelpayouts to avoid duplicate listings.",
      "Set up API-key/token authentication per supplier and validated that returned JSON was parsed, sanitized, and stored correctly before reaching the booking flow.",
    ],
    link: "#!",
  },
  {
    id: 3,
    image: umrahImg,
    category: "PHP / MYSQL / FULL-STACK",
    tags: ["PHP", "Laravel", "MySQL", "Admin Dashboard"],
    title: "Umrah Travel Booking System",
    description:
      "Built a dedicated booking engine for Umrah pilgrimage packages managing itinerary selection, pilgrim details, package tiers, and admin package management.",
    highlights: [
      "Designed the database schema for package selection, pilgrim details, and booking status tracking across the full pilgrimage lifecycle.",
      "Kept the flow separate from the general hotel/flight system to handle package-specific data like itinerary and group size.",
      "Built admin-facing tools for managing package availability and reviewing/updating customer bookings.",
    ],
    link: "#!",
  },
  {
    id: 4,
    CustomVisual: MobileAppApiVisual,
    category: "PHP / REST API / MOBILE",
    tags: ["REST API", "Mobile Backend", "Session Auth"],
    title: "PHPTravels Mobile App Backend API",
    description:
      "Developed fast and reliable RESTful backend APIs for the official mobile app, handling user sessions, authentication, and optimized data payloads.",
    highlights: [
      "Handled user login/session authentication and JSON data exchange between the app and the main system.",
      "Optimized request/response payloads to keep the app fast and reliable on mobile networks.",
      "Worked closely with the mobile team to keep request/response contracts consistent with the website's booking flow.",
    ],
    link: "#!",
  },
  {
    id: 5,
    CustomVisual: PaymentGatewayVisual,
    category: "PAYMENTS / REST API / SECURITY",
    tags: ["Xmoney", "Card & Wallet", "API Auth"],
    title: "Xmoney Card & Wallet Payment Integration",
    description:
      "Connected Xmoney payment gateway for card and wallet transactions, handling API key/token authentication, JSON parsing, and booking status confirmations.",
    highlights: [
      "Handled API-key/token authentication and JSON request/response cycles for both card and wallet payment methods.",
      "Confirmed payment status before finalizing bookings, keeping payment and booking records in sync.",
      "Added error handling for malformed responses and timeout edge cases to keep payments reliable.",
    ],
    link: "#!",
  },
  {
    id: 6,
    CustomVisual: RailBookingVisual,
    category: "PHP / RAIL API / INTEGRATION",
    tags: ["Rail APIs", "Jakarta", "China Rail"],
    title: "Jakarta & China Rail Booking Engine",
    description:
      "Connected train booking APIs enabling real-time schedule lookup, seat availability, and ticket issuance for rail networks in Jakarta and China.",
    highlights: [
      "Mapped route, schedule, and fare data from the rail supplier APIs into the platform's existing booking system.",
      "Enabled users to search and book train tickets across two separate rail networks through one consistent flow.",
      "Kept fare and availability data in sync with the same error handling patterns used across other supplier integrations.",
    ],
    link: "#!",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "api", name: "Multi-Supplier APIs" },
  { id: "backend", name: "PHP & Laravel" },
  { id: "payments", name: "Payment Gateways" },
  { id: "rail", name: "Rail Systems" },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "api") return project.category.includes("APIs") || project.category.includes("REST");
    if (activeCategory === "backend") return project.category.includes("PHP") || project.tags.includes("Laravel");
    if (activeCategory === "payments") return project.category.includes("PAYMENTS") || project.tags.includes("Xmoney");
    if (activeCategory === "rail") return project.category.includes("RAIL") || project.tags.includes("Rail APIs");
    return true;
  });

  return (
    <div
      className="content py-16 md:py-24 bg-sky-50 text-slate-700"
      id="portfolio"
    >
      <Reveal className="mb-8 text-center max-w-2xl mx-auto px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-600 mb-2">
          Portfolio &amp; Work
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Featured Integrations &amp; <span className="text-gradient">Projects</span>
        </h2>
        <p className="font-normal text-base md:text-lg pt-4 text-slate-500 leading-relaxed">
          A showcase of production travel API integrations, multi-supplier backend engines, payment gateways, and mobile APIs I've engineered.
        </p>
      </Reveal>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-300/40 scale-105"
                : "bg-white text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-300 shadow-sm"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="mx-auto flex justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
          {filteredProjects.map((data, index) => (
            <Reveal key={data.id} delay={(index % 3) * 100}>
              <Projects data={data} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Portfolio;