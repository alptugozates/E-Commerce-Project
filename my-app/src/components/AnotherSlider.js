import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FluidContent from "./FluidContent";
import AnotherFluidContent from "./AnotherFluidContent";
import productFoto2 from "../foto/ProductPageFoto/single-product-1-cover-2.jpg";
import productFoto1 from "../foto/ProductPageFoto/single-product-1-cover-1.jpg";

const AnotherSlider = () => {
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
        <img src={productFoto2} alt="Slide 1" />
      </div>
      <div>
        <img src={productFoto1} alt="Slide 2" />
      </div>
    </Slider>
  );
};

export default AnotherSlider;
