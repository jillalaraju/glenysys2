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
import Footer from "./footer/Footer";

// Define an array of service routes
const serviceRoutes = [
  { path: "it-services", component: ITServices },
  { path: "application-development", component: ApplicationDevelopment },
  { path: "big-data-development", component: BigDataDevelopment },
  { path: "staffing-services", component: StaffingServices },
  { path: "salesforce-development", component: SalesforceDevelopment },
  { path: "talend-development", component: TalendDevelopment },
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Define the parent route for services */}
          <Route path="/services" element={<Services />}>
            {serviceRoutes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
