import React from "react";

const Contact = () => {
    return (
        <div className="container contact">
            <div className="contact-form-wrapper">
                <form action="#" className="contact-form" id="contactForm">
                    <h5 className="title">Get in Touch</h5>
                    <p className="description">Feel free to contact me if you need any assistance or question.</p>
                    <div>
                        <input
                            type="text"
                            className="form-control rounded border-white mb-3 form-input"
                            id="name"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="form-control rounded border-white mb-3 form-input"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            className="form-control rounded border-white mb-3 form-text-area"
                            rows="5"
                            cols="30"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <div className="submit-button-wrapper">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;