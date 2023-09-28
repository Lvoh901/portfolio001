import React from "react";

const Services = (props) => {
    const { title, imageSrc } = props;

    return (
        <div className="services">
            <img src={imageSrc} className="card-img-top" alt={title} />
            <h6 className="card-title fw-bold mb-2">{title}</h6>
        </div>
    );
}

export default Services;