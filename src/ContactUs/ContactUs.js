import "./contactUs.scss";
import mainImg from "./assets/main-img.jpg";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneAndroid } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="main-img-section">
        <img src={mainImg} />
        <div className="main-img-text">ContactUs</div>
      </div>
      <div className="cards-container">
        <div className="card">
          <CiLocationOn style={{ width: "60px", height: "60px" }} />
          <h4>Address</h4>
          <p>75 Executive Center, Suite 413, Aurora, IL 60504</p>
        </div>
        <div className="card">
          <AiOutlineMail style={{ width: "60px", height: "60px" }} />
          <h4>Email Us</h4>
          <p>info@gmail.com</p>
        </div>
        <div className="card">
          <MdPhoneAndroid style={{ width: "60px", height: "60px" }} />
          <h4>Let's Talk</h4>
          <p>+91 9988778899</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
