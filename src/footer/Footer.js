import "./footer.scss";
import logo from "./assets/logo.png";
import footer2 from "./assets/footer2.jpg";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoLogoGoogleplus } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="footer1">
          <img src={logo} />
          <div className="contact-details">
            <a href="tel">
              <div>
                <MdCall />
              </div>
              <p>+91 8899887766</p>
            </a>
            <a href="email">
              <div>
                <MdEmail />
              </div>
              <p>info@gmail.com</p>
            </a>
            <a href="location">
              <div>
                <MdLocationOn />
              </div>
              <p>75 Executive Center, Suite 413, Aurora, IL 60504</p>
            </a>
          </div>
          <div className="logos-container">
            <a>
              <div>
                <IoLogoGoogleplus />
              </div>
            </a>
            <a>
              <div>
                <ImFacebook />
              </div>
            </a>
            <a>
              <div>
                <FaInstagram />
              </div>
            </a>
            <a>
              <div>
                <FaLinkedinIn />
              </div>
            </a>
            <a>
              <div>
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
        <div>
          <img src={footer2} />
        </div>
        <div>
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.476029179489!2d-122.08424968468145!3d37.42206597982759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6dbecb0b9%3A0x43e84a9b776f8589!2sGoogleplex!5e0!3m2!1sen!2sus!4v1680548721053!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-ending">
        <p>Copyright © Glenysys Technologies Inc</p>
      </div>
    </>
  );
};

export default Footer;
