// components/NavLink.js
import React from 'react';

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative mx-2 group text-gray-800"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-[3px] w-full bg-gradient-to-r from-[#B86ADE] via-[#FC6C69] to-[#FFAE48] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </a>
  );
};

export default NavLink;
