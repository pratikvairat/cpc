import React, { useState } from 'react';
import './css/Contact.css';
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <React.Fragment>
            <div class="con">
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
                                <input type="text" name="name" class="input" placeholder='Name' />
                                
                            </div>
                            <div class="input-container">
                                <input type="email" name="email" class="input" placeholder='Email' />
                            
                                
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" class="input" placeholder='Phone' />
                                
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" class="input" placeholder='Enter Message'></textarea>
                                
                            </div>
                            <input type="submit" value="Send" class="btn" />
                        </form>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Contact;