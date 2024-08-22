import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import img1 from "./assets/image.png";
import img2 from "./assets/im2.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-page">
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
  );
};

export default Home;
