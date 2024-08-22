import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import img1 from "./assets/image.png";
import img2 from "./assets/im2.png";
import imgs1 from "./assets/img1.jpg";
import imgs2 from "./assets/img3.jpg";
import imgs3 from "./assets/test-1.jpg";
import imgs4 from "./assets/test-2.jpg";
import imgs5 from "./assets/test-3.jpg";
import imgs6 from "./assets/test-5.jpg";
import imgs7 from "./assets/test-7.jpg";
import exp from "./assets/exp.jpg";
import lap from "./assets/lap.jpg";
import { IoIosGlobe } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbUserSearch } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";

import "./home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <Swiper
          modules={[Navigation, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={img1} alt="Description of Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Description of Image 2" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="second-second">
        <Swiper
          modules={[Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={imgs1} alt="Description of Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs2} alt="Description of Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs3} alt="Description of Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs4} alt="Description of Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs5} alt="Description of Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs6} alt="Description of Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs7} alt="Description of Image 2" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="about-section">
        <div className="text-section">
          <h2>ABOUT US</h2>
          <p>
            Glenysys Technologies IT Services are provided with innovative
            strategies that accelerate the way to do a business of any type that
            allows enabling technologies stimulating the business growth of your
            company. From accumulating ideas through our extensive research,
            analytics and clientele engagement to deliver IT Services and
            Solutions, we plan meticulously to offer customized, optimized and
            proficiency with comprehensive in advanced technologies as well as
            proven IT expertise in the entire IT space. At Glenysys
            Technologies, we strategically plan to cut the unwanted expenditure
            for our clients. This will help you in maximizing quality, improves
            performance, efficiency and procure valuable investments.
          </p>
          <button>Read More</button>
        </div>
        <div className="img-section">
          <img src={exp} />
        </div>
      </div>
      <div className="service-section">
        <div className="service-main">
          <div className="img-container">
            <img src={lap} />
          </div>
          <div className="Text-container">
            <div className="Text-main">
              <h2>SERVICES</h2>
              <p>
                Helping you find the right IT Solutions For Services Beyond
                Technology
              </p>
            </div>
            <div className="Text-icons">
              <div className="icons">
                <IoIosGlobe className="icon" />
                IT Services
              </div>
              <div className="icons">
                <HiOutlineComputerDesktop className="icon" />
                Application Development
              </div>
              <div className="icons">
                <FaDatabase className="icon" />
                Big Data Development
              </div>
              <div className="icons">
                <RiCustomerService2Line className="icon" />
                Staffing Services
              </div>
              <div className="icons">
                <IoIosPeople className="icon" />
                Salesforce Development
              </div>
              <div className="icons">
                <TbUserSearch className="icon" />
                Talend Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
