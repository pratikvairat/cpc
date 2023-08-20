import React from 'react';
import './css/Footer.css'; 
import SliderEvent from './SliderEvent';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
             <img className="logo" src="https://cdn.pixabay.com/photo/2023/08/16/17/58/club-8194741_150.png"></img>
             <p className='text-white'>Competitive Programming Club</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right"></i>About Us</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right"></i>Contact Us</a></li>
                <li><Link to="/login"><i className="fa fa-angle-double-right"></i>Login</Link></li>
                <li><Link to="/register"><i className="fa fa-angle-double-right"></i>Register Now</Link></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
             
              <SliderEvent/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="#"><i className="bi bi-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-google"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="bi bi-slack"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p><u><a href="https://www.nationaltransaction.com/">Competitive Coding Club</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
              <p className="h6">&copy; All rights reserved. <a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank" rel="noopener noreferrer">Sunlimetech</a></p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
