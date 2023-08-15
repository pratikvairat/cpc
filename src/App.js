import React from 'react';
import './App.css';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Testonomial from './components/Testonomial';
function App() {
  return (
    <React.Fragment>
      <section className='bg-dark'>
        <Testonomial/>
      </section>
      <section>
        <Contact />
      </section>
      <section className='bg-dark'>
          <FAQ />
      </section>
      
    </React.Fragment>
  );
}

export default App;
