import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Update with your actual profile links
const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/share/1a18nTs8JK/" },
  { icon: faInstagram, link: "https://www.instagram.com/shahidiqbal.426?igsh=MTdkN295YnY1amZzaQ==" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/shahid-iqbal-916665259" },
  { icon: faWhatsapp, link: "https://wa.me/923055668426" }, 
  { icon: faTiktok, link: "https://www.tiktok.com/@mhrshahidiqbal426?_t=ZS-8zyBDVDNN7F&_r=1" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className="text-sky-600 bg-sky-50 border border-sky-100 hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 p-2.5 xs:p-3 sm:p-3.5 rounded-lg"
      key={index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="text-lg w-4.5 aspect-square"
      />
    </a>
  ));
};

export default SocialMedia;
