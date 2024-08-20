import "./footer.scss";
import logo from "./assets/logo.png";
import footer2 from "./assets/footer2.jpg";

const Footer = () => {
  return (
    <div className="footer-component">
      <div>
        <img src={logo} />
      </div>
      <div>
        <img src={footer2} />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.476029179489!2d-122.08424968468145!3d37.42206597982759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6dbecb0b9%3A0x43e84a9b776f8589!2sGoogleplex!5e0!3m2!1sen!2sus!4v1680548721053!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
