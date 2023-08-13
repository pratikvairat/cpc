import React from 'react';
import './App.css';
import FAQ from './components/FAQ';
import Testonomial from './components/Testonomial';
function App() {
  return (
    <React.Fragment>
      <section className='bg-dark'>
        <Testonomial/>
      </section>
      <section className='bg-dark'>
        
        
          <FAQ />
        
      </section>
    </React.Fragment>
  );
}

export default App;
