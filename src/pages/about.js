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
                        description="Make your brand standout with an attention-provoking logo that sets you apart and creates the attention you need."
                        imageSrc="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                    <Card
                        title="02. FrontEnd Web Dev."
                        description="Website Development that incoporates modern development systems including version control, HTML, CSS, and React.JS."
                        imageSrc="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                    <Card
                        title="03. Freelancing"
                        description="Specializing in both research and data analysis models with both the basic and advanced systems to derive both meaningful and impactful information."
                        imageSrc="https://images.unsplash.com/photo-1592151450113-bdf5982da169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    />
                    <Card
                        title="04. GIS/ Photography"
                        description="Work covers various aspects from data collection, analysis, representation, and periodic updates of the same."
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
                            description="Let's craft stunning websites that embody your brand and vision. By harnessing the latest technologies and best practices, lets ensure your site not only attracts but engages visitors, making a lasting impact."
                            imageSrc="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        />

                        <Services
                            title="Code Review Services"
                            description="Let me assist in ensuring your code meets industry standards and is working optimally. Comes with comprehensive, insightful, and thorough reviews. Some deliverables include improved code efficiency, security, and performance optimization."
                            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                        />

                        <Services
                            title="Script Automation"
                            description="Let's work on streamlining operations and boosting efficiency for business or personal functions. Its time to reduce redundant tasks that consume both valuable time and resources. I tailor-make scripts that automate these repetitive workflows, allowing you focus on what truly matters."
                            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        />

                        <Services
                            title="Game Modding"
                            description="As a passionate gamer, I would love to help enhance your gaming experience. Game scripting and modding service opens up a world of possibilities for players and game developers. You access public mods and custom creations, that breathe new life to your favorite games."
                            imageSrc="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        />

                        <Services
                            title="Data Visualization Models"
                            description="Let's work on transforming complex data into meaningful insights through the power of data visualization. In today's data-driven world, information can quickly become overwhelming. Get visually engaging and interactive graphical representations that effortlessly convey the essence of your data."
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
