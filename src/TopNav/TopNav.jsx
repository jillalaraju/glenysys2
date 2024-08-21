import React from "react";
import image from "./assets/cancel.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import "./topNav.scss";

const firstList = [
  {
    icon: <FaLocationDot className="icon-img" />,
    name: "75 Executive Center, Suite 413, Aurora, IL 60504",
  },
  {
    icon: <FaPhone className="icon-img" />,
    name: "+1 (901)-878-9996",
  },
  {
    icon: <MdEmail className="icon-img" />,
    name: "info@glenysys.com",
  },
];

const secondList = [
  <FaGoogle className="icon-img1" />,
  <FaFacebookF className="icon-img1" />,
  <GrInstagram className="icon-img1" />,
  <FaTwitter className="icon-img1" />,
  <FaLinkedinIn className="icon-img1" />,
];

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="first-div">
        {firstList.map((item, index) => {
          return (
            <div key={index}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="second-div-card">
        <div className="second-div">
          {secondList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <div className="login-card">
          <FaUserAlt className="user" />
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
