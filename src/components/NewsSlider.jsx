import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const news = () => {
  [
    { thumbnail: "https://via.placeholder.com/100", title: 'News 1', author: 'Author 1', updated: '1 jam yang lalu' },
    { thumbnail: "https://via.placeholder.com/100", title: 'News 2', author: 'Author 2', updated: '12 jam yang lalu' },
    { thumbnail: "https://via.placeholder.com/100", title: 'News 3', author: 'Author 3', updated: '4 jam yang lalu' },
    { thumbnail: "https://via.placeholder.com/100", title: 'News 4', author: 'Author 4', updated: '3 jam yang lalu' },
  ];
}
export default () => {
  return (
    <div className="recent-updates">
    {news.map((anon, index) => (
    <Swiper>
          <SwiperSlide>
          <div key={index} className="news-item flex items-center mb-4">
            <div className="avatar w-16 h-16 bg-gray-300 mr-4"></div>
            <div className="info">
              <h4 className="text-lg font-semibold">{anon.title}</h4>
              <p className="text-gray-600">{anon.author}</p>
              <p className="text-gray-500">{anon.updated}</p>
            </div>
          </div>
          </SwiperSlide>
    </Swiper>
   ))}
   </div>
  );
};