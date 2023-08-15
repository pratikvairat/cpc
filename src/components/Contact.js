import React from 'react';
import './css/Contact.css';
function Contact() {
    return (
        <React.Fragment>
            <section>
                <div class="container">
                    <span class="big-circle"></span>
                    <img src="vs workspace/shape.png" class="square" alt="" />
                    <div class="form">
                        <div class="contact-info">
                            <h3 class="title">Let's get in touch</h3>
                            <p class="text">
                                discription
                            </p>

                            <div class="info">
                                <div class="information">
                                    <img src="vs workspace/location.png" class="icon" alt="" />
                                    <p>Address</p>
                                </div>
                                <div class="information">
                                    <img src="vs workspace/email.png" class="icon" alt="" />
                                    <p>yourmail@gmial.com</p>
                                </div>
                                <div class="information">
                                    <img src="vs workspace/phone.png" class="icon" alt="" />
                                    <p>Phone no</p>
                                </div>
                            </div>

                            <div class="social-media">
                                <p>Connect with us :</p>
                                <div class="social-icons">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form">
                            <form action="index.html" autocomplete="off">
                                <h3 class="title">Contact us</h3>
                                <div class="input-container">
                                    <input type="text" name="name" class="input" />
                                    <label for="">Username</label>
                                    <span>Username</span>
                                </div>
                                <div class="input-container">
                                    <input type="email" name="email" class="input" />
                                    <label for="">Email</label>
                                    <span>Email</span>
                                </div>
                                <div class="input-container">
                                    <input type="tel" name="phone" class="input" />
                                    <label for="">Phone</label>
                                    <span>Phone</span>
                                </div>
                                <div class="input-container textarea">
                                    <textarea name="message" class="input"></textarea>
                                    <label for="">Message</label>
                                    <span>Message</span>
                                </div>
                                <input type="submit" value="Send" class="btn" />
                            </form>
                        </div>
                    </div>
                </div>


            </section>
        </React.Fragment>
    )
}

export default Contact;