// Project.js
import React from 'react';
import { NavLink } from "react-router-dom";

function Project(props) {
    const { title, number, overview, imageSrc, describe } = props;

    return (
        <div className="project01">
            <p className="number">{number}</p>
            <p className="card-title fw-bold">{title}</p>
            <small className="describe fw-bold">{describe}</small>
            <p className="overview">{overview}</p>
            <img src={imageSrc} className="img-bottom" alt={title} />

            <div>
                <button id="btn_more">
                    <NavLink to="/" target="_blank">Find Out More</NavLink>
                </button>
            </div>
        </div>
    );
}

export default Project;
