import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <div className="container hero">
            <div className="header">
                <div className="container profile">
                    <img src={require('./images/profile01.png')} alt="profile" id="profile" width="250px"></img>
                </div>

                <div className="container d-flex flex-row justify-content-center align-items-center mt-4" id="hero">
                    <div className="name">
                        <p className="text-white text-center name1">Elvis</p>

                        <p className="text-white text-center name2">Odhiambo.</p>

                        <p className="text-white text-center mt-3 professions">
                            a Frontend <strong><u>Web Developer</u></strong> || <strong><u>Graphic</u></strong> Designer || <strong><u>GIS</u></strong> Specialist.
                        </p>

                        <div className="container d-flex justify-content-center mt-5" id="socials">
                            <NavLink to="https://github.com/Lvoh901" target="_blank">
                                <img src={require('./images/github.png')} alt="gmail" width="35px"></img>
                            </NavLink>

                            <NavLink to="https://www.linkedin.com/in/odhiamboelvis/" target="_blank">
                                <img src={require('./images/linkedin.png')} alt="linkedin" width="40px"></img>
                            </NavLink>

                            <NavLink to="https://twitter.com/LvohOdhis" target="_blank">
                                <img src={require('./images/twitter.png')} alt="twitter" width="40px"></img>
                            </NavLink>
                        </div>

                        <div className="container buttons ">
                            <button type="button" className="btn btn_one text-white fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="hire_me">
                                <NavLink to="/contact" >Hire_Me</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;