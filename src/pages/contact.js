import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="container contact">
                <div className="contact1">
                    <form>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Name</label>
                        </div>

                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>

                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Message</label>
                        </div>

                        <div className="submit-button-wrapper">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>

                <div className="contact2">
                    <h4>Call Me</h4>
                    <p>We can schedule a call to discuss your project and design. Reach Out on: <u>0712345678</u></p>
                    <h4>Live Chat</h4>
                    <p>We can schedule a zoom meeting or physical sit-down.</p>
                </div>
            </div>

            <div className="faq text-white">
                <div className="faq1">
                    <p>FAQ</p>
                    <h1>Frequently asked Questions.</h1>
                </div>

                <div className="faq2">
                    <p className="fw-bold">Some Few Concerns you might have</p>
                    <ul>
                        <li>Working Timeline: Depends on Task/Project.</li>
                        <li>Project Costing: Reach Out for a Quotation.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;