import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook } from "react-icons/fa";
 import { AiFillTikTok } from "react-icons/ai";


const SummaryProfile = ({ profile }) => {
  const { name = 'Tuan Tran', description = 'No description', imageSrc, imageAlt = 'Profile Image', socialLinks = {} } = profile;

  return (
    <div className="flex flex-wrap-reverse lg:flex-1">
      <div id="link" className="w-full grow flex flex-col p-6">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="social-links">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} ><FaFacebook /></a>
          )}
          {socialLinks.youtube && (
            <a href={socialLinks.youtube} className="text-red-500">YouTube</a>
          )}
          {socialLinks.tiktok && (
            <a href={socialLinks.tiktok} ><AiFillTikTok/></a>
          )}
          {/* Thêm các liên kết mạng xã hội khác ở đây nếu cần */}
        </div>
      </div>
      <div id="image" className="flex-none w-full flex lg:w-fit p-6 h-[400px] overflow-hidden">
        <img src={imageSrc} alt={imageAlt} className="aspect-auto lg:aspect-[3/4] h-full" />
      </div>
    </div>
  );
};

SummaryProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    socialLinks: PropTypes.shape({
      facebook: PropTypes.string,
      youtube: PropTypes.string,
      tiktok: PropTypes.string,
      // Thêm các mạng xã hội khác nếu cần
    }),
  }).isRequired,
};

export default SummaryProfile;
