import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import MeetOurTeam from '../components/MeetOurTeam';
import ContactForm from '../components/ContactForm';

import './Home.css';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <MeetOurTeam />
      <ContactForm />
    </div>
  );
}

export default Home;

