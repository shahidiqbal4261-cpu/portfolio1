import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import SupplierStrip from "../components/common/suppliers/SupplierStrip";
import Profession from "../components/profession/Profession";
import WorkProcess from "../components/workProcess/WorkProcess";
import Notes from "../components/notes/Notes";
import WorkTogether from "../components/workTogether/WorkTogether";
import Contact from "../components/contact/Contact";
import WaveDivider from "../components/common/wave/WaveDivider";
import ApiNetworkBackground from "../components/common/bg/ApiNetworkBackground";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white text-slate-700 min-h-screen">

      <section id="hero" aria-label="Hero and About" className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-white bg-radial-hero pb-16 overflow-hidden">
        <ApiNetworkBackground />
        <div className="content px-4 md:px-8 relative z-10">
          <Introduction />
          <Profile />
        </div>
      </section>

      <section id="portfolio" aria-label="Featured Projects Portfolio" className="relative bg-sky-50/70 pt-8 pb-16">
        <Portfolio />
        <WaveDivider back="#e0f2fe" front="#ffffff" />
      </section>

      <section id="suppliers" aria-label="Integrated API Suppliers" className="relative bg-white py-16 md:py-20">
        <SupplierStrip />
      </section>

      <section id="profession" aria-label="Technical Expertise and Skills" className="relative bg-sky-50/50 py-20 md:py-28">
        <div className="px-4 md:px-8">
          <Profession />
        </div>
      </section>

      <section id="work-process" aria-label="API Architecture Pipeline" className="relative bg-white bg-radial-section py-16 md:py-24">
        <div className="px-4 md:px-8">
          <WorkProcess />
        </div>
      </section>

      <section id="notes" aria-label="Integration Notes" className="relative bg-sky-50/60 py-16 md:py-24">
        <Notes />
      </section>

      <section id="work-together" aria-label="Collaboration Call to Action" className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 py-24 md:py-32">
        <div className="px-4 md:px-8">
          <WorkTogether />
        </div>
      </section>

      <section id="contact" aria-label="Get in Touch" className="relative bg-white pt-16 pb-20">
        <div className="px-4 md:px-8">
          <Contact />
        </div>
      </section>

    </div>
  );
};

export default Home;
