import React from "react";
import PropTypes from "prop-types";
const CardProject = ({ info }) => {
    const {
        imageSrc,
        imageAlt,
        title = 'Title',
        description = 'Description',
        category
    } = info;
    return (
        <div className="flex flex-col">
            <div
                id="image"
                className="w-full hidden lg:flex flex-none overflow-hidden rounded-lg  border border-gray-200"
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-[400px] h-[250px] object-cover"
                />
            </div>
            <div className="mt-2 flex flex-col">
                <h2 id="title" className="text-3xl font-bold text-gray-700">{title}</h2>
                <p className="text-base font-light text-gray-500 line-clamp-2">{description}</p>
            </div>
        </div>
    );
};

CardProject.propTypes = {
    info: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        imageSrc: PropTypes.string,
        imageAlt: PropTypes.string
    }).isRequired,
};


export default CardProject;
