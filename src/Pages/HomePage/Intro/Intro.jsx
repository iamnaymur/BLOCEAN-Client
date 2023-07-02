import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="font-displayOne mt-10">
      <h1 className="text-7xl font-bold">
        Hey, we are <span className="font-displayTwo font-light">BLOCEAN</span>.
      </h1>
      <h1 className="text-6xl mt-5">
        We believe in the power of sharing ideas, experiences, and expertise to
        empower and enrich lives.
      </h1>
      <input
        type="text"
        placeholder="Your email address"
        className="input input-bordered w-full max-w-xs mt-5 rounded-3xl"
      />
      <Link
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          Subscribe
        </span>
        <span className="relative invisible">Subscribe</span>
      </Link>
    </div>
  );
};

export default Intro;
