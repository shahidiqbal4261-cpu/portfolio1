import { useState } from "react";
import emailjs from "emailjs-com";
import Magnetic from "../common/magnetic/Magnetic";
import SuccessCheck from "../common/successCheck/SuccessCheck";

const telegramSVG = (
  <svg
    className="w-4 md:w-6 aspect-square"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32013L6.34 2.32013C5.78749 2.04514 5.16362 1.94724 4.55344 2.03978C3.94326 2.13232 3.37646 2.4108 2.93033 2.83724C2.48421 3.26369 2.18046 3.81735 2.0605 4.42274C1.94054 5.02813 2.0102 5.65578 2.26 6.22013L4.66 11.5901C4.71446 11.72 4.74251 11.8593 4.74251 12.0001C4.74251 12.1409 4.71446 12.2803 4.66 12.4101L2.26 17.7801C2.0567 18.2368 1.97076 18.7371 2.00998 19.2355C2.0492 19.7339 2.21235 20.2145 2.48459 20.6338C2.75682 21.0531 3.12953 21.3977 3.56883 21.6363C4.00812 21.875 4.50009 22 5 22.0001C5.46823 21.9955 5.92949 21.8861 6.35 21.6801L20.35 14.6801C20.8466 14.4303 21.264 14.0474 21.5557 13.5742C21.8474 13.101 22.0018 12.556 22.0018 12.0001C22.0018 11.4442 21.8474 10.8993 21.5557 10.4261C21.264 9.95282 20.8466 9.56994 20.35 9.32013H20.34ZM19.45 12.8901L5.45 19.8901C5.26617 19.9784 5.05973 20.0084 4.85839 19.976C4.65705 19.9436 4.47041 19.8504 4.32352 19.709C4.17662 19.5675 4.07648 19.3845 4.03653 19.1846C3.99658 18.9846 4.01873 18.7772 4.1 18.5901L6.49 13.2201C6.52094 13.1484 6.54766 13.075 6.57 13.0001H13.46C13.7252 13.0001 13.9796 12.8948 14.1671 12.7072C14.3546 12.5197 14.46 12.2653 14.46 12.0001C14.46 11.7349 14.3546 11.4806 14.1671 11.293C13.9796 11.1055 13.7252 11.0001 13.46 11.0001H6.57C6.54766 10.9253 6.52094 10.8518 6.49 10.7801L4.1 5.41013C4.01873 5.22309 3.99658 5.01568 4.03653 4.8157C4.07648 4.61572 4.17662 4.43273 4.32352 4.29128C4.47041 4.14982 4.65705 4.05666 4.85839 4.02428C5.05973 3.9919 5.26617 4.02186 5.45 4.11013L19.45 11.1101C19.6138 11.194 19.7513 11.3215 19.8473 11.4786C19.9433 11.6356 19.994 11.8161 19.994 12.0001C19.994 12.1842 19.9433 12.3647 19.8473 12.5217C19.7513 12.6787 19.6138 12.8062 19.45 12.8901Z"
      fill="white"
    />
  </svg>
);

const commonClass =
  "bg-sky-50/60 border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-4 py-3.5 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200 text-sm md:text-base w-full transition-all duration-300";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      location: e.target.location.value,
      budget: e.target.budget.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const mailtoUrl = `mailto:shahidiqbal4261@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    )}`;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4y70lke";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ziupamh";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LVF65wfGfjVUDVRct";

    // Try EmailJS first
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )
      .then(
        (result) => {
          console.log("EmailJS SUCCESS:", result);
          setStatus({
            type: "success",
            title: "Message Sent!",
            message: `Thank you, ${formData.name}. Your inquiry has been sent directly to Shahid Iqbal.`,
          });
          setSubmitted(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.warn("EmailJS info (using direct dispatch fallback):", error);
          
          // Trigger mailto fallback smoothly
          window.location.href = mailtoUrl;

          setStatus({
            type: "success",
            title: "Inquiry Prepared & Email App Opened!",
            message: `Thank you, ${formData.name}! Your message has been prepared for shahidiqbal4261@gmail.com and your default email app was opened.`,
          });
          setSubmitted(true);
          setLoading(false);
          e.target.reset();
        }
      );
  };

  return (
    <div>
      <p className="text-sm sm:text-base font-normal text-slate-400 mb-6">
        Fill in the details below to discuss API integrations, contract opportunities, or full-stack web applications.
      </p>

      {status && (
        <div
          className={`mb-6 p-4 rounded-xl border animate-[fadeInUp_0.35s_ease-out] ${
            status.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
              : "bg-sky-50 border-sky-200 text-sky-700"
          }`}
        >
          <div className="flex items-center gap-3">
            <SuccessCheck className={status.type === "success" ? "text-emerald-500" : "text-sky-500"} />
            <div>
              <h4 className="font-semibold text-sm sm:text-base text-slate-900">
                {status.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {status.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <input type="text" name="name" placeholder="Your Name *" className={commonClass} required />
        <input type="email" name="email" placeholder="Your Email Address *" className={commonClass} required />
        <input type="text" name="location" placeholder="Location *" className={commonClass} required />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="budget" placeholder="Budget / Range *" className={commonClass} required />
          <input type="text" name="subject" placeholder="Project Subject *" className={commonClass} required />
        </div>

        <textarea name="message" placeholder="Project Details or API Requirements *" rows="4" className={commonClass} required />

        <Magnetic strength={30} className="w-full mt-4">
          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 text-sm md:text-base transition duration-300 cursor-pointer disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>
                Send Message {telegramSVG}
              </>
            )}
          </button>
        </Magnetic>
      </form>
    </div>
  );
};

export default Form;
