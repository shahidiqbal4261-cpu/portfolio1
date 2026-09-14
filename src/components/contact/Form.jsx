import { useState } from "react";
import emailjs from "emailjs-com";
import Magnetic from "../common/magnetic/Magnetic";
import SuccessCheck from "../common/successCheck/SuccessCheck";

const commonClass =
  "bg-sky-50/60 border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-4 py-3.5 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200 text-sm md:text-base w-full transition-all duration-300";

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
      `Name: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location || "—"}\nBudget: ${formData.budget || "—"}\n\nMessage:\n${formData.message}`
    )}`;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4y70lke";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ziupamh";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LVF65wfGfjVUDVRct";

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(
        () => {
          setStatus({
            type: "success",
            title: "Message Sent",
            message: `Thank you, ${formData.name}. Your message was sent successfully.`,
          });
          setLoading(false);
          e.target.reset();
        },
        () => {
          window.location.href = mailtoUrl;
          setStatus({
            type: "success",
            title: "Email app opened",
            message: `Your message is ready to send to shahidiqbal4261@gmail.com.`,
          });
          setLoading(false);
          e.target.reset();
        }
      );
  };

  return (
    <div>
      <p className="text-sm sm:text-base text-slate-500 mb-6">
        Hiring, freelance API work, or a contract build — send a short note below.
      </p>

      {status && (
        <div
          className={`mb-6 p-4 rounded-xl border ${
            status.type === "success"
              ? "bg-sky-50 border-sky-200 text-sky-800"
              : "bg-sky-50 border-sky-200 text-sky-700"
          }`}
        >
          <div className="flex items-center gap-3">
            <SuccessCheck className="text-sky-500" />
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

        <div>
          <label htmlFor="contact-name" className={labelClass}>Name *</label>
          <input id="contact-name" type="text" name="name" placeholder="Your name" className={commonClass} required />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>Email *</label>
          <input id="contact-email" type="email" name="email" placeholder="you@company.com" className={commonClass} required />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>Subject *</label>
          <input id="contact-subject" type="text" name="subject" placeholder="Hiring / API integration / contract" className={commonClass} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-location" className={labelClass}>Location (optional)</label>
            <input id="contact-location" type="text" name="location" placeholder="City / remote" className={commonClass} />
          </div>
          <div>
            <label htmlFor="contact-budget" className={labelClass}>Budget (optional)</label>
            <input id="contact-budget" type="text" name="budget" placeholder="Range or TBD" className={commonClass} />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>Message *</label>
          <textarea id="contact-message" name="message" placeholder="What do you need help with?" rows="4" className={commonClass} required />
        </div>

        <Magnetic strength={30} className="w-full mt-2">
          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 text-sm md:text-base transition duration-300 cursor-pointer disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </Magnetic>
      </form>
    </div>
  );
};

export default Form;
