import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    customPaging: (i) => <div className="dot"></div>,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      image: "https://via.placeholder.com/800x400",
      title: "Novel Title 1",
      description: "This is a description for Novel 1.",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Novel Title 2",
      description: "This is a description for Novel 2.",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Novel Title 3",
      description: "This is a description for Novel 3.",
    },
  ];

  return (
    <div className="carousel relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Weekly Featured</h3>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-xl font-bold">{slide.title}</h3>
              <p className="mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", right: "10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

export default Carousel;
