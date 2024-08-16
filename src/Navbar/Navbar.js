// css
import "./navbar.css";

// Assets
import logo from "./assets/image.png";
import menuIcon from "./assets/more.png";
import cancelIcon from "./assets/cancel.png";
import rightIcon from "./assets/right-arrow.png";
import { useState } from "react";

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
        path: "/case-study",
      },
      {
        name: "Application Development",
        path: "/career",
      },
      {
        name: "Big Data Development",
        path: "/contact-us",
      },
      {
        name: "Staffing Services",
        path: "/login",
      },
      {
        name: "Salesforce Development",
        path: "/career",
      },
      {
        name: "Talend Development",
        path: "/contact-us",
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
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  const handleSubLinks=()=>{
    setIsSubMenu(!isSubMenu)
  }
  return (
    <div className="navbar">
      <div
        className={`menu-card ${
          isMenu ? "menu-open-style" : "menu-close-style"
        }`}
      >
        <div className="menu-close">
          <img src={cancelIcon} alt="logo" onClick={handleMenu} />
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index} onClick={item?.subLinks && handleSubLinks}>
                  <div>
                    <img src={rightIcon} alt="right-icon" />
                    <p>{item.name}</p>
                  </div>
                  {item?.subLinks && isSubMenu && (
                    <ul className="sub-link-card">
                      {item.subLinks.map((link, ind) => {
                        return (
                          <li key={ind} className="sub-link">
                            <img src={rightIcon} alt="right-icon" />
                            <p>{link.name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="navbar-image">
        <img src={logo} alt="logo" />
      </div>
      {!isMenu && (
        <div className="menu-icon" onClick={handleMenu}>
          <img src={menuIcon} alt="menu-logo" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
