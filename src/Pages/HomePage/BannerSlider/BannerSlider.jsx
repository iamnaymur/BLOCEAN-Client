import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const BannerSlider = () => {
  const [blogs, setBlogs] = useState();
  // console.log("🚀 ~ file: BannerSlider.jsx:6 ~ BannerSlider ~ blogs:", blogs);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mt-20 font-displayOne">
      <div className="mb-10">
        <hr className="border-b-0 border-gray-300 " />
        <h1 className="text-xl font-semibold">Get started with our best stories.</h1>
      </div>
      <Slider blogs={blogs} />
    </div>
  );
};

export default BannerSlider;
