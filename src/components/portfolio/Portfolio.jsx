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

/**
 * Add proof links when available:
 *   link: "https://..."     // live site / demo
 *   github: "https://..."   // public or “ask for access” repo
 */
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
    link: "https://skyvela.com",
    github: null,
    caseStudy: {
      problem:
        "Travel search needed one UI over hotels, flights, and cars, but each supplier returned different JSON shapes, auth models, and booking lifecycles.",
      role:
        "Owned the backend integration layer — supplier auth, response normalization, cross-supplier checkout, and webhook status sync.",
      approach:
        "Mapped each supplier into a shared internal model, dispatched parallel supplier calls, and reconciled booking status via webhooks into one record.",
      result:
        "A unified search and checkout flow where mixed-supplier bookings stay trackable without exposing supplier quirks to the frontend.",
      outcomes: [
        "Single internal data model across Hotelbeds, Duffel, and Mozio",
        "Independent order tracking per supplier within one checkout",
        "Live booking status updates via supplier webhooks",
      ],
    },
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
    link: "https://www.travelgatekw.com/",
    github: null,
    caseStudy: {
      problem:
        "PHPTravels needed multiple hotel and transport suppliers online without duplicate inventory or broken booking states.",
      role:
        "Implemented supplier connectors, field mapping, auth, and webhook listeners inside the existing platform.",
      approach:
        "Added per-supplier auth, normalized hotel content, and validated JSON before it entered the booking pipeline.",
      result:
        "Multi-supplier search and booking with cleaner inventory and reliable status updates.",
      outcomes: [
        "Token-based Travelpayouts + Hotelbeds connectors",
        "Duplicate hotel content reconciliation",
        "Webhook-driven booking status updates",
      ],
    },
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
    link: null,
    github: null,
    caseStudy: {
      problem:
        "Umrah packages needed itinerary, group, and pilgrim data that did not fit a generic hotel/flight booking flow.",
      role:
        "Designed schema, booking flow, and admin tools for package lifecycle management.",
      approach:
        "Separated package booking from general travel APIs and modeled pilgrim + package tiers explicitly.",
      result:
        "A dedicated Umrah engine with admin control over packages and bookings.",
      outcomes: [
        "Package-specific schema and booking states",
        "Admin tools for availability and booking review",
        "Clean separation from multi-supplier hotel/flight flows",
      ],
    },
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
    link: null,
    github: null,
    caseStudy: {
      problem:
        "The mobile app needed the same booking capabilities as the web platform with lighter payloads and stable session auth.",
      role:
        "Built REST endpoints, session auth, and payload contracts for the mobile client.",
      approach:
        "Aligned mobile request/response shapes with the website booking flow while trimming payloads for mobile networks.",
      result:
        "A reliable mobile backend that stays in sync with web booking behavior.",
      outcomes: [
        "Session-based login and authenticated API access",
        "Optimized JSON payloads for mobile",
        "Consistent contracts with the web booking flow",
      ],
    },
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
    link: null,
    github: null,
    caseStudy: {
      problem:
        "Bookings must not finalize until card/wallet payment is confirmed, including webhook edge cases and timeouts.",
      role:
        "Integrated Xmoney charge flow, auth, and payment-to-booking status confirmation.",
      approach:
        "Authenticated API calls, validated responses, and only issued booking confirmation after verified payment status.",
      result:
        "Payments and bookings stay aligned with safer failure handling.",
      outcomes: [
        "Card and wallet charge support",
        "Booking finalized only after confirmed payment",
        "Timeout and malformed-response handling",
      ],
    },
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
    link: null,
    github: null,
    caseStudy: {
      problem:
        "Two rail networks needed search, availability, and ticketing inside the same booking product as hotels and flights.",
      role:
        "Mapped rail supplier data into the existing booking system and aligned error handling with other integrations.",
      approach:
        "Normalized schedule/fare models and reused platform booking patterns for both Jakarta and China rail APIs.",
      result:
        "One consistent rail booking experience across two supplier networks.",
      outcomes: [
        "Real-time schedule and seat lookup",
        "Unified booking flow for both rail networks",
        "Shared error-handling patterns with other suppliers",
      ],
    },
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "api", name: "Travel APIs" },
  { id: "payments", name: "Payments" },
  { id: "mobile", name: "Mobile" },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "api") {
      return (
        (project.category.includes("APIs") ||
          project.category.includes("RAIL") ||
          project.category.includes("FULL-STACK")) &&
        !project.category.includes("MOBILE") &&
        !project.category.includes("PAYMENTS")
      );
    }
    if (activeCategory === "payments") return project.category.includes("PAYMENTS");
    if (activeCategory === "mobile") return project.category.includes("MOBILE");
    return true;
  });

  return (
    <div className="content py-16 md:py-24 text-slate-700">
      <Reveal className="mb-8 text-center max-w-2xl mx-auto px-4">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title text-slate-900">
          Featured Integrations &amp; <span className="text-gradient">Projects</span>
        </h2>
        <p className="font-normal text-base md:text-lg pt-4 text-slate-500 leading-relaxed">
          Production travel API integrations, multi-supplier backends, payments, and mobile APIs. Open a project for the case study.
        </p>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-2 mb-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-sky-500 text-white shadow-sm shadow-sky-300/30"
                : "bg-white text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-300"
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
