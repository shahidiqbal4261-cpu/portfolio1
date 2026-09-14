import { faDownload, faTimes, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Magnetic from "../magnetic/Magnetic";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const resumeUrl = `${baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"}Shahid_Iqbal_Resume.pdf`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-[fadeIn_0.25s_ease-out]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[88vh] bg-white border border-sky-100 rounded-3xl shadow-2xl shadow-sky-200/50 flex flex-col overflow-hidden text-slate-800 animate-[fadeInUp_0.3s_ease-out]"
      >
        {/* Light Theme Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-sky-50 via-white to-sky-50 border-b border-sky-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white shadow-md shadow-sky-300/40 flex items-center justify-center font-bold text-lg">
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                Shahid Iqbal <span className="text-sky-600 font-semibold">– Official Resume</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Full-Stack Developer &amp; API Integration Specialist
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href={resumeUrl}
                download="Shahid_Iqbal_Resume.pdf"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-sky-300/40 transition duration-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faDownload} /> Download PDF
              </a>
            </Magnetic>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-sky-50 hover:bg-rose-50 text-slate-500 hover:text-rose-500 border border-sky-200 flex items-center justify-center transition duration-300 cursor-pointer"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>

        {/* PDF Frame Container */}
        <div className="flex-1 bg-sky-50/40 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src={resumeUrl}
            title="Shahid Iqbal Resume PDF"
            className="w-full h-full rounded-2xl border border-sky-100 bg-white shadow-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
