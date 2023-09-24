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
        <div className="container about">
            <div className="container text-white" id="about-section">
                <h1>About Me:</h1>
                <p id="about">
                    A versatile professional with a passion for web development, graphic design, and Geographic Information Systems (GIS) seeking to merge creativity and technology as a way to craft innovative real-world solutions. This journey is fueled by an insatiable curiosity and a love for exploring new horizons. Join me on this exciting journey of discovery as we push the boundaries of what\'s possible in the digital world.
                </p>
            </div>

            <div className="container text-white mb-2" id="skills">
                <h4 classname="mb-5">Skillset:</h4>

                <div className="skills">
                    <Card
                        title="01. Logo Design"
                        description="Make your brand standout with an attention-provoking logo."
                        imageSrc="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                    <Card
                        title="02. Web Dev."
                        description="Modern Website built on version control, HTML, CSS, and React.JS, JS."
                        imageSrc="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                    <Card
                        title="03. Freelancing"
                        description="Research and Data Analysis models based on data."
                        imageSrc="https://images.unsplash.com/photo-1592151450113-bdf5982da169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                    <Card
                        title="04. GIS"
                        description="Data Collection, Analysis, Representation, and periodic updates."
                        imageSrc="https://images.unsplash.com/photo-1478860002487-680cc42afbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                </div>

                <div className="hours text-center" id="workhours">
                    <button className="btn_one" onClick={calculateTotalHours}>Professional Work Hours</button>
                    <p id="total" className="fw-bold">{totalHours}+</p>
                </div>

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
        </div>
    );
}

export default About;
