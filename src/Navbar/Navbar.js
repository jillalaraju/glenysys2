import "./navbar.css";

// Assets
import logo from "./assets/image.png";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/about-us",
  },
  {
    name: "SERVICES",
    path: "/services",
    subLinks: [
      {
        name: "IT Services",
        path: "/services/it-services",
      },
      {
        name: "Application Development",
        path: "/services/application-development",
      },
      {
        name: "Big Data Development",
        path: "/services/big-data-development",
      },
      {
        name: "Staffing Services",
        path: "/services/staffing-services",
      },
      {
        name: "Salesforce Development",
        path: "/services/salesforce-development",
      },
      {
        name: "Talend Development",
        path: "/services/talend-development",
      },
    ],
  },
  {
    name: "CASE STUDY",
    path: "/case-study",
  },
  {
    name: "CAREER",
    path: "/career",
  },
  {
    name: "CONTACT US",
    path: "/contact-us",
  },
  {
    name: "LOGIN",
    path: "/login",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMenu, setIsMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleSubLinks = (e, pathname) => {
    e.stopPropagation();
    setActiveSubMenu((prev) => !prev);
    setIsMenu((prev) => !prev);
    navigate(pathname);
  };

  const handleLinks = (item) => {
    if (item.path === "/services") {
      // Toggle sub-menu visibility
      setActiveSubMenu(activeSubMenu === item ? null : item);
    } else {
      // Navigate to the path and close the menu
      navigate(item.path);
      setIsMenu(false);
    }
  };

  const handleSubLinksLaptop = (e, path) => {
    e.stopPropagation();
    navigate(path);
  };

  const handleLinksLaptop = (path) => {
    navigate(path);
  };

  const laptopMenuItems = () =>
    menuItems.filter((item) => !["LOGIN", "CASE STUDY"].includes(item.name));

  return (
    <div className="navbar">
      <div
        className={`menu-card ${
          isMenu ? "menu-open-style" : "menu-close-style"
        }`}
      >
        <div className="menu-close">
          <RxCross2 className="cross-icon" onClick={handleMenu} />
        </div>
        <nav className="menu-list-card">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => handleLinks(item)}>
                <div>
                  <FaAngleRight className="right-icon" />
                  <p>{item.name}</p>
                </div>
                {item.subLinks && activeSubMenu === item && (
                  <ul className="sub-link-card">
                    {item.subLinks.map((link, ind) => (
                      <li
                        key={ind}
                        className="sub-link"
                        onClick={(e) => handleSubLinks(e, link.path)}
                      >
                        <FaAngleRight className="right-icon" />
                        <p>{link.name}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="navbar-image">
        <img src={logo} alt="Logo" />
      </div>
      {!isMenu && (
        <div className="menu-icon" onClick={handleMenu}>
          <LuMenu className="menu-icon-image" />
        </div>
      )}
      <div className="laptop-navbar">
        <nav className="laptop-nav">
          <ul className="laptop-list-card">
            {laptopMenuItems().map((item, index) => (
              <li key={index} onClick={() => handleLinksLaptop(item.path)}>
                <span className={item.path === pathname ? "active-color" : ""}>
                  {item.name}
                </span>
                {item.name === "SERVICES" && (
                  <div className="laptop-sub-menu">
                    {item.subLinks.map((subItem, subIndex) => (
                      <p
                        key={subIndex}
                        onClick={(e) => handleSubLinksLaptop(e, subItem.path)}
                      >
                        {subItem.name}
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
