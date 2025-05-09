import React from 'react';
import 'animate.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
function App() {
  return (
    <>
      <Navbar />

      <HeroSection/>
        <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactForm/>
      <ChatWidget/>
    </>
  );
}

export default App;
