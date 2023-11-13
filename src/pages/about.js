import React, { useState } from "react";
import Services from "./services";
import Project from "./project";
import { NavLink } from "react-router-dom";

//images
import portfolioImage from "../pages/images/portfolio.png";


const About = () => {
    const [totalHours, setTotalHours] = useState(0);

    //hours of worked clocked in Calculate and display the total hours
    const calculateTotalHours = () => {
        const research = 12000;
        const web = 3000;
        const graphic = 2000;
        const photography = 500;
        const gis = 5000;

        const hours = research + web + graphic + photography + gis;
        setTotalHours(hours);
    };

    return (
        <div className="container">
            <div className="about">
                <div className="text-white" id="about-title">
                    <h1>About Me:</h1>
                </div>

                <div className="text-white" id="about-section">
                    <p id="about">
                        A versatile professional with a passion for web development, graphic design, and Geographic Information Systems (GIS) seeking to merge creativity and technology as a way to craft innovative real-world solutions. This journey is fueled by an insatiable curiosity and a love for exploring new horizons. Join me on this exciting journey of discovery as we push the boundaries of what\'s possible in the digital world. Professional Skills:
                    </p>
                </div>

                <div className="hours text-center" id="workhours">
                    <button className="btn_one" onClick={calculateTotalHours}>Professional Work Hours</button>
                    <p id="total" className="fw-bold">{totalHours}+</p>
                </div>
            </div>

            <div className="container text-white mb-2" id="skills">
                <div className="services-offered">
                    <h4 classname="mb-5">Services:</h4>

                    <div className="job">
                        <Services
                            title="Web Development"
                            imageSrc="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        />

                        <Services
                            title="Code Review Services"
                            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                        />

                        <Services
                            title="Game Modding"
                            imageSrc="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        />

                        <Services
                            title="Data Visualization"
                            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                        />
                    </div>

                    <button className="btn_one">
                        <NavLink to="/contact" >Contact</NavLink>
                    </button>
                </div>
            </div>

            <hr className="text-white" />
            <div className="container text-white projects">
                <div className="content1">
                    <div className="main-content">
                        <h1>Complete Projects</h1>
                        <h5>All projects are built using a combination of different graphics and web development tools including:</h5>

                        <div className="lh-1 fs-6 mt-3">
                            <p>HTML | CSS | JavaScript</p>
                            <p>Bootstrap</p>
                            <p>Git | GitHub</p>
                            <p>ReactJS</p>
                            <p>Adobe Illustrator | Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <Project
                    title="Portfolio"
                    number="01"
                    overview="Built with React.JS with skills and knowldege gained in HTML, CSS, Bootstrap and JavaScript."
                    imageSrc={portfolioImage}
                    describe="Personal"
                />

                <Project
                    title="Blog"
                    number="02"
                    overview="Coming Soon!"
                    imageSrc={portfolioImage}
                    describe="Personal"
                />

                <Project
                    title="Travel Company"
                    number="03"
                    overview="Coming Soon!"
                    imageSrc={portfolioImage}
                    describe="Personal"
                />
            </div>
        </div>
    );
}

export default About;
