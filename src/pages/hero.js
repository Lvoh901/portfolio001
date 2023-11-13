import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Services from "./services";
import Project from "./project";
import portfolioImage from "../pages/images/portfolio.png";

const Hero = () => {
    const [totalHours, setTotalHours] = useState(0);

    const calculateTotalHours = () => {
        const workHours = [12000, 3000, 2000, 500, 5000];
        const hours = workHours.reduce((total, current) => total + current, 0);
        setTotalHours(hours);
    };

    return (
        <div className="container hero">
            <div className="header mt-4">
                <div className="container profile">
                    <img
                        src={require('./images/profile01.png')}
                        alt="profile"
                        id="profile"
                        width="250px"
                    />
                </div>

                <div className="container d-flex flex-row justify-content-center align-items-center mt-4" id="hero">
                    <div className="name">
                        <p className="text-white text-center name1">Elvis</p>
                        <p className="text-white text-center name2">Odhiambo.</p>
                        <p className="text-white text-center mt-3 professions">
                            a Frontend <strong><u>Web Developer</u></strong> || <strong><u>Graphic</u></strong> Designer || <strong><u>GIS</u></strong> Specialist.
                        </p>

                        <div className="container d-flex justify-content-center mt-5" id="socials">
                            {[
                                { to: "https://github.com/Lvoh901", image: "github.png", width: 35 },
                                { to: "https://www.linkedin.com/in/odhiamboelvis/", image: "linkedin.png", width: 40 },
                                { to: "https://twitter.com/LvohOdhis", image: "twitter.png", width: 40 },
                            ].map((social, index) => (
                                <NavLink key={index} to={social.to} target="_blank">
                                    <img src={require(`./images/${social.image}`)} alt={social.image} width={social.width} />
                                </NavLink>
                            ))}
                        </div>

                        <div className="container buttons">
                            <button type="button" className="btn btn_one text-white fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="hire_me">
                                <NavLink to="/contact">Hire_Me</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="about text-white">
                    <h1>About Me:</h1>
                    <p>
                        A versatile professional with a passion for web development, graphic design, and Geographic Information Systems (GIS) seeking to merge creativity and technology as a way to craft innovative real-world solutions. This journey is fueled by an insatiable curiosity and a love for exploring new horizons. Join me on this exciting journey of discovery as we push the boundaries of what's possible in the digital world. Professional Skills:
                    </p>

                    <div className="hours text-center" id="workhours">
                        <button className="btn_one" onClick={calculateTotalHours}>Professional Work Hours</button>
                        <p id="total" className="fw-bold">{totalHours}+</p>
                    </div>
                </div>

                <div className="text-white mb-2" id="skills">
                    <div className="services-offered">
                        <h4 classname="mb-5">Services:</h4>

                        <div className="job">
                            {[
                                { title: "Web Development", imageSrc: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
                                { title: "Code Review Services", imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" },
                                { title: "Game Modding", imageSrc: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" },
                                { title: "Data Visualization", imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" },
                            ].map((service, index) => (
                                <Services key={index} title={service.title} imageSrc={service.imageSrc} />
                            ))}
                        </div>

                        <button className="btn_one">
                            <NavLink to="/contact">Contact</NavLink>
                        </button>
                    </div>
                </div>

                <hr className="text-white" />

                <div className="text-white projects container">
                    <div className="content1">
                        <div className="main-content">
                            <h1>Complete Projects</h1>
                            <h5>All projects are built using a combination of different graphics and web development tools including:</h5>

                            <div className="lh-1 fs-6 mt-3">
                                <p>HTML || CSS || JavaScript</p>
                                <p>Bootstrap</p>
                                <p>Git || GitHub</p>
                                <p>ReactJS</p>
                                <p>Adobe Illustrator || Photoshop</p>
                                <p>BackEnd Development (Ongoing)</p>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        {[
                            { title: "Portfolio", number: "01", overview: "Built with React.JS with skills and knowledge gained in HTML, CSS, Bootstrap, and JavaScript.", describe: "Personal" },
                            { title: "Blog", number: "02", overview: "Coming Soon!", describe: "Personal" },
                            { title: "Travel Company", number: "03", overview: "Coming Soon!", describe: "Personal" },
                        ].map((project, index) => (
                            <Project key={index} {...project} imageSrc={portfolioImage} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
