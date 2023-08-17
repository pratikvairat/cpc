import React from 'react';
import LandingPage from './LandingPage';
import Testonomial from './Testonomial';
import FAQ from './FAQ';
import Footer from './Footer';
function Home() {
  return (
    <React.Fragment>
          <LandingPage/>
      <section className='bg-black'>
        <Testonomial/>
      </section>
      <section className='bg-black'>
          <FAQ />
      </section>
      
    </React.Fragment>
  )
}

export default Home;