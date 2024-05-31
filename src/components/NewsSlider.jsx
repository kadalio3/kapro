import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const newsItems = [
  {
    title: "News Title 1",
    date: "5/1/2024",
    thumbnail: "https://via.placeholder.com/100",
  },
  {
    title: "News Title 2",
    date: "5/2/2024",
    thumbnail: "https://via.placeholder.com/100",
  },
  {
    title: "News Title 3",
    date: "5/1/2024",
    thumbnail: "https://via.placeholder.com/100",
  },
  {
    title: "News Title 4",
    date: "5/2/2024",
    thumbnail: "https://via.placeholder.com/100",
  },
  // Add more news items as needed
];

const NewsSlider = () => {
  return (
    <div className="news-slider">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Pengumuman</h2>
        <a href="#" className="text-blue-500">
          View All
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {newsItems.reduce((acc, newsItem, index) => {
          if (index % 2 === 0) {
            acc.push(
              <SwiperSlide key={index}>
                <div className="flex flex-row items-center space-x-4 p-4 bg-gray-400 rounded-lg">
                  <img
                    src={newsItem.thumbnail}
                    alt={newsItem.title}
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{newsItem.title}</h3>
                    <p className="text-sm">{newsItem.date}</p>
                  </div>
                </div>
                <div className="flex flex-row mt-4 items-center space-x-4 p-4 bg-gray-400 rounded-lg">
                  <img
                    src={newsItems[index + 1].thumbnail}
                    alt={newsItems[index + 1].title}
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">
                      {newsItems[index + 1].title}
                    </h3>
                    <p className="text-sm">{newsItems[index + 1].date}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
          return acc;
        }, [])}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
