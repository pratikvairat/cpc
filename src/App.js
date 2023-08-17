import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ';
import Testonomial from './components/Testonomial';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
      <LandingPage/>
      <section className='bg-dark'>
        <Testonomial/>
      </section>
      <section className='bg-dark'>
          <FAQ />
      </section>
      <section className='footer'>
        <Footer/>
      </section>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
