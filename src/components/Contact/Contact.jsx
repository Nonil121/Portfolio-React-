import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="conatct">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__title">Get in Touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@gmail.com</span>

                            <a href="mailto:exampleemail@gmail.com" className="contact__button">Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">999-777-888</span>

                            <a href="" className="contact__button">Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me</h3>

                    <form action="" className="contact__form">
                    <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" name="name" 
                            className="contact__form-input"
                            placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" 
                            className="contact__form-input"
                            placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Message</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write me here!"></textarea>
                        </div>
                    </form>

                    
                </div>
            </div>
        </section >
    )
}

export default Contact