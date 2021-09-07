import React from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrowscomponents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingLg={
        arrows: true,
        autoplay: true,
        centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,


    }
    const settings = {
        arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const images=[
    "https://images.unsplash.com/photo-1630233313373-a03df7d139c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1195&q=80",
    "https://images.unsplash.com/photo-1630241040420-65ac6e542db8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    "https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
  ]
  return(
      <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
          {
          images.map((image)=>(
              <div className="w-full h-44 md: h-80 py-3">
                  <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
          ))
          }
          </HeroSlider>
    </div>

    <div className="hidden lg:block">
    <HeroSlider {...settingLg}>
          {
          images.map((image)=>(
              <div className="w-full h-96 px-2 py-3">
                  <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
          ))
          }
          </HeroSlider>
    </div>
    </>
  );
};

export default HeroCarousal;