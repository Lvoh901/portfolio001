import React from "react";

const Services = (props) => {
    const { title, description, imageSrc } = props;

    return (
        <div className="services">
            <img src={imageSrc} className="card-img-top" alt={title} />
            <div className="card-body mt-3">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Services;