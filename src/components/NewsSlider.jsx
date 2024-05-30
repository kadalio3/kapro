import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const newsItems = [
    {
      thumbnail: "https://via.placeholder.com/100",
      title: "News Title 1",
      date: "2024-05-01",
    },
    {
      thumbnail: "https://via.placeholder.com/100",
      title: "News Title 2",
      date: "2024-05-02",
    },
    {
      thumbnail: "https://via.placeholder.com/100",
      title: "News Title 3",
      date: "2024-05-03",
    },
  ];

  return (
    <div className="news-slider relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Pengumuman</h2>
        <button className="text-blue-500 hover:underline">View All</button>
      </div>
      <Slider {...settings}>
        {newsItems.map((news, index) => (
          <div key={index} className="flex border p-4 shadow-md">
            <img
              src={news.thumbnail}
              alt={`Thumbnail for ${news.title}`}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4 flex flex-col">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p className="text-gray-600">
                {new Date(news.date).toLocaleDateString()}
              </p>
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
      style={{ ...style, display: "block", right: "-10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", left: "-10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

export default NewsSlider;
