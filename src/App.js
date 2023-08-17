import React from 'react';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ';

import Testonomial from './components/Testonomial';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
     
      
      </BrowserRouter>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
