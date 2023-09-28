import React, { useState } from "react";
import Card from "./card";
import Services from "./services"
import { NavLink } from "react-router-dom";

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

                <div className="container text-white" id="about-section">
                    <p id="about">
                        A versatile professional with a passion for web development, graphic design, and Geographic Information Systems (GIS) seeking to merge creativity and technology as a way to craft innovative real-world solutions. This journey is fueled by an insatiable curiosity and a love for exploring new horizons. Join me on this exciting journey of discovery as we push the boundaries of what\'s possible in the digital world. Professional Skills:
                    </p>

                    <div className="skills">
                        <Card
                            title="Logo Design"
                            number="01"
                        />
                        <Card
                            title="Web Dev."
                            number="02"
                        />
                        <Card
                            title="Freelancing"
                            number="03"
                        />
                        <Card
                            title="GIS"
                            number="04"
                        />
                    </div>

                    <div className="hours text-center" id="workhours">
                        <button className="btn_one" onClick={calculateTotalHours}>Professional Work Hours</button>
                        <p id="total" className="fw-bold">{totalHours}+</p>
                    </div>
                </div>
            </div>

            <div className="container text-white mb-2" id="skills">
                <div className="services-offered">
                    <h4 classname="mb-5">Services:</h4>

                    <div className="job">
                        <Services
                            title="Web Development/ Design"
                            imageSrc="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        />

                        <Services
                            title="Code Review Services"
                            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                        />

                        <Services
                            title="Script Automation"
                            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        />

                        <Services
                            title="Game Modding"
                            imageSrc="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        />

                        <Services
                            title="Data Visualization Models"
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
                <div className="highlights">
                    <p>01. Portfolio</p>
                    <p>02. Blog</p>
                    <p>03. E-Commerce</p>
                </div>

                <div className="content1">
                    <div className="main-content">
                        <h1>Complete Projects</h1>
                        <p>All projects are built using a combination of different graphics and web development tools including:</p>

                        <ul>
                            <li>HTML | CSS | JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Git | GitHub</li>
                            <li>ReactJS</li>
                            <li>Adobe Illustrator | Photoshop</li>
                        </ul>
                    </div>

                    <div className="project-card mt-4">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
