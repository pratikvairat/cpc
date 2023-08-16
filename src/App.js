import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ';
import Testonomial from './components/Testonomial';
import Footer from './components/Footer';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
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
