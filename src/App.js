import React from 'react';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ';
import Testonomial from './components/Testonomial';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ProfileSlider from './components/ProfileSlider';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
    <ProfileSlider/>
      <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
