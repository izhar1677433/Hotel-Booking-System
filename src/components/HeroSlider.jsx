import React from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import images
import HeroImg1 from "../assets/images/heroSlider/1.jpg";
import HeroImg2 from "../assets/images/heroSlider/2.jpg";
import HeroImg3 from "../assets/images/heroSlider/3.jpg";
import HeroImg1lg from "../assets/images/rooms/1-lg.png";
import HeroImg1st from "../assets/images/rooms/1.png";
import HeroImg2nd from "../assets/images/rooms/2-lg.png";
import HeroImg2lg from "../assets/images/rooms/2.png";
import HeroImg3lg from "../assets/images/rooms/3-lg.png";
import HeroImg3rd from "../assets/images/rooms/3.png";
import HeroImg4lg from "../assets/images/rooms/4-lg.png";
import HeroImg4th from "../assets/images/rooms/4.png";
import HeroImg5lg from "../assets/images/rooms/5-lg.png";
import HeroImg5th from "../assets/images/rooms/5.png";


const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg3,
    btnText: "See our rooms",
  },
  {
    title: "Summer Vacation",
    background: HeroImg1lg,
    btnText: "See our rooms",
  },
  {
    title: "winter Vacation",
    background: HeroImg1st,
    btnText: "See our rooms",
  },
  {
    title: "Best Service",
    background: HeroImg2lg,
    btnText: "See our rooms",
  },
  {
    title: "Clean and Green Rooms",
    background: HeroImg2nd,
    btnText: "See our rooms",
  },
  {
    title: "Vip Rooms",
    background: HeroImg3lg,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg3rd,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg4lg,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg4th,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg5lg,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg5th,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero font-serif">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSlider h-[600px] lg:h-[860px]"
      >
        {slides.map((slide, index) => {
          // destructure slide
          const { title, background, btnText } = slide;

          return (
            <SwiperSlide
              className="relative flex h-full items-center justify-center bg-pink-200 "
              key={index}
            >
              {/* hero data */}
              <div className="container z-20 mx-auto text-center text-white">
                <div className="mb-5 font-tertiary  uppercase tracking-[6px]">
                  Just Enjoy & Relax
                </div>
                <h1 className=" font-sans mx-auto mb-6 max-w-[920px] font-primary text-[32px] uppercase tracking-[2px] lg:text-[68px]">
                  {title}
                </h1>
                <button className="btn btn-primary btn-lg bg-blue-500 mx-auto">
                  {btnText}
                </button>
              </div>

              {/* hero background */}
              <div className="absolute top-0 left-0 h-full w-full">
                <img
                  src={background}
                  alt="hero slide image"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* hero overlay */}
              <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
