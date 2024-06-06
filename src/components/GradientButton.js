// components/GradientButton.js
import React from 'react';

const GradientButton = ({ children }) => {
  return (
   <button className="relative flex items-center justify-center h-10 rounded-full border  px-5 overflow-hidden group">
      <span className="relative text-base font-medium text-gray-700 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#B86ADE] via-[#FC6C69] to-[#FFAE48]">
        {children}
      </span>
      <span className=" absolute inset-0 border border-transparent rounded-full transition duration-300 group-hover:z-[1] group-hover:border-[length:200%] group-hover:border-gradient-to-r from-[#B86ADE] via-[#FC6C69] to-[#FFAE48]"></span>
    </button>
  );
};

export default GradientButton;
