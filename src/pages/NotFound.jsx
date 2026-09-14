import React from "react";
import { Link } from "react-router-dom";
import Magnetic from "../components/common/magnetic/Magnetic";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f6fafd] text-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-sky-100/40">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 font-extrabold text-3xl mb-6">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-300/30 flex items-center justify-center transition duration-300"
              >
                Back to Home
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href={`${import.meta.env.BASE_URL}#portfolio`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:border-sky-400 hover:text-sky-600 transition duration-300"
              >
                View Projects
              </a>
            </Magnetic>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-6">
          Shahid Iqbal · Full Stack Developer &amp; API Integration Specialist
        </p>
      </div>
    </div>
  );
};

export default NotFound;
