import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import ScrollProgress from "../components/common/scrollProgress/ScrollProgress";
import Loading from "../components/common/loading/Loading";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      <ScrollProgress />
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <div className="bg-white">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
