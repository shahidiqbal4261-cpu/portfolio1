import React from "react";
import { Link } from "react-router-dom";
import Magnetic from "../components/common/magnetic/Magnetic";
import Tilt3D from "../components/common/tilt/Tilt3D";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center">
        <Tilt3D max={10} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-extrabold text-3xl mb-6">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
            The page or resource you are looking for doesn’t exist or has been moved. Explore Shahid Iqbal’s portfolio sections below!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition duration-300"
              >
                ← Back to Home
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href="/portfolio1/#portfolio"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-800/80 border border-slate-700 hover:text-white hover:border-sky-500/50 transition duration-300"
              >
                View Projects
              </a>
            </Magnetic>
          </div>
        </Tilt3D>

        <p className="text-xs text-slate-500 mt-6">
          Shahid Iqbal | Full Stack Developer &amp; API Integration Specialist
        </p>
      </div>
    </div>
  );
};

export default NotFound;
