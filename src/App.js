import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import About from "./About/About";
import CaseStudy from "./CaseStudy/CaseStudy";
import ContactUs from "./ContactUs/ContactUs";
import Career from "./Career/Career";
import Services from "./Services/Services";
import ITServices from "./Services/subComponents/ItServices/ItServices";
import ApplicationDevelopment from "./Services/subComponents/ApplicationDevelopment/ApplicationDevelopment";
import BigDataDevelopment from "./Services/subComponents/BigDataDevelopment/BigDataDevelopment";
import StaffingServices from "./Services/subComponents/StaffingServices/StaffingServices";
import SalesforceDevelopment from "./Services/subComponents/SalesforceDevelopment/SalesforceDevelopment";
import TalendDevelopment from "./Services/subComponents/TalendDevelopment/TalendDevelopment";

import "./App.css";
import TopNav from "./TopNav/TopNav";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <TopNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/it-services" element={<ITServices />} />
          <Route
            path="/services/application-development"
            element={<ApplicationDevelopment />}
          />
          <Route
            path="/services/big-data-development"
            element={<BigDataDevelopment />}
          />
          <Route
            path="/services/staffing-services"
            element={<StaffingServices />}
          />
          <Route
            path="/services/salesforce-development"
            element={<SalesforceDevelopment />}
          />
          <Route
            path="/services/talend-development"
            element={<TalendDevelopment />}
          />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
