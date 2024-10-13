"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import SlideArrow from "./SlideArrow";

function SliderComponent({ ratings }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    cssEase: "ease",
    nextArrow: <SlideArrow next={true} />,
    prevArrow: <SlideArrow />,
  };

  return (
    <Slider
      {...settings}
      className="after:absolute after:-right-5 after:top-0 after:h-full after:w-16 after:bg-white/20 after:backdrop-blur-sm before:absolute  before:left-0 before:top-0 before:h-full before:w-16 before:z-20 before:bg-white/20 before:backdrop-blur-sm "
    >
      {ratings?.map((e) => (
        <Slide key={e.id} data={e} />
      ))}
    </Slider>
  );
}

export default SliderComponent;
