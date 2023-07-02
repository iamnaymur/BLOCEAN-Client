import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules

const Slider = ({ blogs }) => {
  // console.log(blogs);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {blogs?.map((blog) => (
          <div key={blog.id}>
            <SwiperSlide key={blog.id}>
              <div className=" ">
                <div>
                  <img
                    className="rounded-3xl hover:-translate-y-2 p-1 transition-all cursor-pointer w-[500px] h-[500px]"
                    src={blog?.image}
                    alt=""
                  />
                </div>
                {/* Text part */}
                <div>
                  {blog?.tags?.map((tag) => (
                    <span className="btn btn-xs m-2">{tag}</span>
                  ))}
                  <h1 className="font-bold text-2xl">{blog?.title}</h1>
                  <h1>{blog?.details.slice(0, 100)}...</h1>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
