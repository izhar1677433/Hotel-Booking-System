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
import HeroImg1st from "../assets/images/rooms/1.png";
import HeroImg2lg from "../assets/images/rooms/2.png";
import HeroImg3rd from "../assets/images/rooms/3.png";
import HeroImg4th from "../assets/images/rooms/4.png";
import HeroImg5th from "../assets/images/rooms/5.png";
import Room1 from "../assets/images/rooms/room1.jpg";
import Room2 from "../assets/images/rooms/room2.jpg";
import Room3 from "../assets/images/rooms/room3.jpg";
import Room4 from "../assets/images/rooms/room4.jpg";
import Room5 from "../assets/images/rooms/room5.jpg";
import Room6 from "../assets/images/rooms/room6.jpg";
import Room7 from "../assets/images/rooms/room7.jpg";
import Room8 from "../assets/images/rooms/room8.jpg";


const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg1,
    btnText: "Take Tour",
  },
  {
    title: "Clean Enviroment",
    background: HeroImg2,
    btnText: "Take Tour",
  },
  {
    title: "Luxury",
    background: HeroImg3,
    btnText: "Take Tour",
  },
  {
    title: "Summer Vacation",
    background: HeroImg1,
    btnText: "Take Tour",
  },
  {
    title: "winter Vacation",
    background: HeroImg1st,
    btnText: "Take Tour",
  },
  {
    title: "Best Service",
    background: HeroImg2lg,
    btnText: "Take Tour",
  },
  {
    title: "Clean and Green Rooms",
    background: HeroImg2,
    btnText: "Take Tour",
  },
  {
    title: "Vip Rooms",
    background: HeroImg3,
    btnText: "Take Tour",
  },
  {
    title: "Summer Vacation",
    background: HeroImg3rd,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room3,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg4th,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room5,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg5th,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room1,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room2,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room3,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room4,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room5,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room6,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room7,
    btnText: "Take Tour",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: Room8,
    btnText: "Take Tour",
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
                  <a href="https://app.lapentor.com/sphere/virtual-tour-to-the-hotal">{btnText}</a>
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
