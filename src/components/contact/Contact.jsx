import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import Reveal from "../common/reveal/Reveal";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Lahore, Pakistan",
    link: "https://www.google.com/maps?q=Lahore,+Pakistan",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "shahidiqbal4261@gmail.com",
    link: "mailto:shahidiqbal4261@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+92 305 5668426",
    link: "tel:+923055668426",
  },
];

const Contact = () => {
  return (
    <div className="relative z-10 px-4 md:px-8 xl:px-16 overflow-visible" id="contact-section">
      <div className="orb-3d orb-3d-b w-72 h-72 -top-16 right-0 bg-sky-200/50"></div>
      <div
        className="content relative p-6 sm:p-10 lg:p-16 xl:p-20 bg-white border border-slate-100 backdrop-blur-xl rounded-3xl shadow-2xl shadow-sky-100/60"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-20">

          {/* Left Section - Info */}
          <Reveal direction="left" className="flex-1 lg:max-w-md">
            <div>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Let’s discuss your <span className="text-gradient">Project</span>
              </h2>

              <p className="text-base sm:text-lg max-lg:text-center font-normal text-slate-600 leading-relaxed mb-8">
                I'm available for senior backend roles, freelance API integrations, and contract software development. Drop a message or contact me directly!
              </p>
            </div>

            {/* Address cards */}
            <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            {/* Social Media */}
            <div className="w-full max-lg:text-center mt-6">
              <p className="text-xs font-semibold text-slate-500 max-lg:hidden mb-3 uppercase tracking-wider">Connect with me:</p>
              <div className="inline-flex gap-2 p-2 rounded-xl bg-sky-50/80 border border-sky-100">
                <SocialMedia />
              </div>
            </div>
          </Reveal>

          {/* Right Section - Form */}
          <Reveal direction="right" className="flex-1 w-full lg:py-2">
            <Form />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;