import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/shahid-iqbal-916665259",
    label: "LinkedIn",
  },
  {
    icon: faGithub,
    link: "https://github.com/shahidiqbal4261-cpu",
    label: "GitHub",
  },
  {
    icon: faWhatsapp,
    link: "https://wa.me/923055668426",
    label: "WhatsApp",
  },
];

const SocialMedia = () => {
  return socialIcons.map((item) => (
    <a
      href={item.link}
      aria-label={item.label}
      className="text-sky-600 bg-sky-50 border border-sky-100 hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:scale-105 transition-all duration-300 p-2.5 xs:p-3 sm:p-3.5 rounded-lg"
      key={item.label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={item.icon} className="text-lg w-4.5 aspect-square" />
    </a>
  ));
};

export default SocialMedia;
