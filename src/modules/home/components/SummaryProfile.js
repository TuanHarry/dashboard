import React from 'react';
import PropTypes from 'prop-types';
import { FaInstagramSquare, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

const SummaryProfile = ({ profile }) => {
    const {
        name = "Tuan Tran",
        description = "No description",
        imageSrc,
        imageAlt = "Profile Image",
        socialLinks = {},
    } = profile;

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF] to-[#FDFEED] py-8 md:py-16 lg:py-20">
            <div className="container flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="hidden lg:flex flex-none w-full lg:w-fit overflow-hidden order-first lg:order-last">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full object-cover"
                    />
                </div>
                <div className="w-full grow flex flex-col p-6 text-center lg:text-left order-last lg:order-first">
                    <div className='flex-none flex justify-center w-full lg:hidden pb-6'>
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full object-cover"
                        />
                    </div>
                    <div id="social-links" className="flex flex-row items-center justify-center lg:justify-start space-x-4">
                        {socialLinks.ins && (
                            <a href={socialLinks.ins}>
                                <FaInstagramSquare />
                            </a>
                        )}
                        {socialLinks.facebook && (
                            <a href={socialLinks.facebook}>
                                <FaFacebook />
                            </a>
                        )}
                        {socialLinks.tiktok && (
                            <a href={socialLinks.tiktok}>
                                <AiFillTikTok />
                            </a>
                        )}
                        {socialLinks.linked && (
                            <a href={socialLinks.linked}>
                                <FaLinkedin />
                            </a>
                        )}
                    </div>
                    <h2 className="mt-6 font-semibold text-[36px] lg:text-[52px] text-gray-800 ">
                        Hey there, <br /> It's {name}
                    </h2>
                    <p className="mt-6 font-normal text-base text-gray-600 w-full lg:w-[720px]">"{description}"</p>
                    <div className="mt-6 flex flex-row items-center justify-center lg:justify-start space-x-6">
                        <button className="flex items-center justify-center h-10 rounded-full border border-gray-700 px-5 ">
                            <span className="text-base font-medium text-gray-700">Say hello →</span>
                        </button>
                        <button className="flex items-center justify-center h-10 rounded-full border border-gray-700 px-5 ">
                            <span className="text-base font-medium text-gray-700">My Profile</span>
                        </button>
                    </div>
                </div>
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
            ins: PropTypes.string,
            facebook: PropTypes.string,
            tiktok: PropTypes.string,
            linked: PropTypes.string,
        }),
    }).isRequired,
};

export default SummaryProfile;
