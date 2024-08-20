import "./about.scss";
import aboutImg from "./assets/aboutImage.png";
import aboutImgs from "./assets/abou-us.jpg";
import k1 from "./assets/k1.png";
import k2 from "./assets/k2.jpg";
import k3 from "./assets/k3.png";
import k4 from "./assets/k4.png";
import k5 from "./assets/k5.png";
import k6 from "./assets/k6.png";
import pi from "./assets/pi.jpg";

const About = () => {
  // const screenWidth = window.innerWidth;

  return (
    <div className="about-page">
      <div className="main-img-container">
        <img src={aboutImg} className="main-img" />
      </div>
      <div className="digital-container">
        {/* {screenWidth > 1150 ? (
          <div className="side-img-container">
            <img src={aboutImgs} className="side-img" />
          </div>
        ) : (
          " "
        )} */}
        <div className="side-img-container">
            <img src={aboutImgs} className="side-img" />
          </div>

        <div className=" side-text-container">
          <h3>Digital Experience Design & Creative</h3>
          <p>
            Glenysys Technologies is one of the most trusted names in the IT
            industry to empower businesses by delivering world-class technology
            solutions for its clients. Our vision is to drive innovations and
            quality to help businesses to scale up their performance and achieve
            technology objectives. With our seamless technology-oriented
            solutions company, we help you to accelerate to run your business
            smoothly with various applications, big data services, Salesforce
            development services, talent and staffing services with on-demand
            technology that moves your business a step ahead to clinch
            competitive advantage. At Glenysys, we help a wide range of
            companies from startups to established and small-size to large
            enterprises to solve their biggest challenges of enabling business
            transformation by keeping pace with emerging technologies. We go to
            extra mile to delight our clients with our innovative and creative
            technology solutions in a win-win approach that amplifies our
            strengths to deploy efficiency for your business.
          </p>
        </div>
      </div>
      <div className="core-section">
        <div className="core-container">
          <h3>Core Principles & Values</h3>
          <p>
            We strongly believe in working as a collaborative team on a platform
            that forecasts organization in conducting ethical business
            practices. Our values – building clientele relationships with values
            among clients, employees, and whoever want to join us to form the
            growth and success of the organization. Our key dimension is
            value-based relationships that make employees grow as the business
            partners who continually strive to work hard in exhibiting their
            skills and talents.
            <br />
            <br />
            To stand on what we believe in and to promote our values that puts
            the interest of clients
          </p>
        </div>
        <div className="img-text-main">
          <div className="img-text-container">
            <div className="img-text">
              <div className="text1">
                <h4>COLLECTIVE EFFORTS</h4>
                <p>Inclusive of organization’s prosperity</p>
              </div>
              <img src={k1} />
            </div>
            <div className="img-text">
              <div className="text1">
                <h4>INTEGRITY</h4>
                <p>Engendering honesty, principle, and virtue</p>
              </div>
              <img src={k2} />
            </div>
            <div className="img-text">
              <div className="text1">
                <h4>COMPETITIVE</h4>
                <p>Aiming towards goals</p>
              </div>
              <img src={k3} />
            </div>
          </div>
          <div>
            <img src={pi} />
          </div>
          <div className="img-text-container">
            <div className="img-text2">
              <img src={k4} />
              <div className="text2">
                <h4>OPPORTUNITY</h4>
                <p>Work in a manner that builds efficiency</p>
              </div>
            </div>
            <div className="img-text2">
              <img src={k5} />
              <div className="text2">
                <h4>TRANSPARENCY</h4>
                <p>Results in trust, deep sense of credibility</p>
              </div>
            </div>
            <div className="img-text2">
              <img src={k6} />
              <div className="text2">
                <h4>PRODUCTIVITY</h4>
                <p>Innovative in activity that enhances productivity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
