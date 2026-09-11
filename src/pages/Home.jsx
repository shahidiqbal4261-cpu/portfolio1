import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import WaveDivider from "../components/common/wave/WaveDivider";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white text-slate-700 min-h-screen">

      {/* 1. Hero (Intro + Profile) — soft sky-blue fading to white, like the sky */}
      <div className="relative bg-gradient-to-b from-sky-200 via-sky-50 to-white bg-radial-hero pb-16">
        <div className="content px-4 md:px-8">
          <Introduction />
          <Profile />
        </div>
        <WaveDivider back="#bae6fd" front="#ffffff" className="absolute bottom-0 left-0" />
      </div>

      {/* 2. Work Process */}
      <div className="relative bg-white bg-radial-section py-20 md:py-28">
        <div className="px-4 md:px-8">
          <WorkProcess />
        </div>
        <WaveDivider back="#e0f2fe" front="#f0f9ff" />
      </div>

      {/* 3. Portfolio */}
      <div className="relative bg-sky-50 pt-4 pb-8">
        <div>
          <Portfolio />
        </div>
        <WaveDivider back="#bae6fd" front="#0ea5e9" />
      </div>

      {/* 4. Work Together (Call to Action) — bold colour band */}
      <div className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 py-24 md:py-32">
        <div className="px-4 md:px-8">
          <WorkTogether />
        </div>
        <WaveDivider back="#bfdbfe" front="#f0f9ff" />
      </div>

      {/* 5. Profession */}
      <div className="relative bg-sky-50 py-20 md:py-28">
        <div className="px-4 md:px-8">
          <Profession />
        </div>
        <WaveDivider back="#dbeafe" front="#ffffff" />
      </div>

      {/* 6. Happy Clients / Tech marquee */}
      <div className="relative bg-white py-16 md:py-20">
        <div className="px-4 md:px-8">
          <HappyClients />
        </div>
        <WaveDivider back="#e0f2fe" front="#f0f9ff" />
      </div>

      {/* 7. Testimonial */}
      <div className="relative bg-sky-50 bg-radial-section py-20 md:py-28">
        <div className="px-4 md:px-8">
          <Testimonial />
        </div>
        <WaveDivider back="#bae6fd" front="#ffffff" />
      </div>

      {/* 8. Contact */}
      <div className="relative bg-white pt-16 pb-16">
        <div className="px-4 md:px-8">
          <Contact />
        </div>
      </div>

    </div>
  );
};

export default Home;
