import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FluidContent from "./FluidContent";
import AnotherFluidContent from "./AnotherFluidContent";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div>
        <FluidContent alt="Slide 1" />
      </div>
      <div>
        <AnotherFluidContent alt="Slide 2" />
      </div>
    </Slider>
  );
};

export default MySlider;
