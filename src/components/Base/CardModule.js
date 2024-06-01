import React from "react";
import PropTypes from "prop-types";
const CardModule = ({ info }) => {
    const {
        imageSrc,
        imageAlt,
        title = 'Title',
        description = 'Description',
        category
    } = info;
    return (
        <div className="flex flex-row space-x-0 lg:space-x-4">
            <div
                id="image"
                className="w-1/2 hidden lg:flex flex-none "
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-[400px] h-[250px] rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-col">
                <h2 id="title" className="text-3xl font-bold text-gray-700">{title}</h2>
                <p id="description" className="mt-2 text-base font-light text-justify text-gray-500 line-clamp-7">{description}</p>
            </div>
        </div>
    );
};

CardModule.propTypes = {
    info: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        imageSrc: PropTypes.string,
        imageAlt: PropTypes.string,
        category: PropTypes.string
    }).isRequired,
};


export default CardModule;
