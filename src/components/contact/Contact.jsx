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
    <div className="relative z-10 px-4 md:px-8 xl:px-16">
      <div
        className="content relative p-6 sm:p-10 lg:p-16 xl:p-20 bg-white border border-slate-100 rounded-3xl shadow-lg shadow-sky-100/40"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-20">
          <Reveal direction="left" className="flex-1 lg:max-w-md">
            <div>
              <h2 className="section-title text-slate-900 mb-4">
                Let’s discuss your <span className="text-gradient">Project</span>
              </h2>

              <p className="text-base sm:text-lg max-lg:text-center text-slate-600 leading-relaxed mb-8">
                Available for backend / API contract roles, freelance integrations, and full-stack builds.
              </p>
            </div>

            <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            <div className="w-full max-lg:text-center mt-6">
              <p className="text-xs font-semibold text-slate-500 max-lg:hidden mb-3 uppercase tracking-wider">
                Connect
              </p>
              <div className="inline-flex gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                <SocialMedia />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="flex-1 w-full lg:py-2">
            <Form />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
