import React from 'react';
import 'animate.css';

const HeroSection = () => {
  return (
    <section
      className="text-dark py-4 mt-5"
      id="hero"
      style={{
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)', // Soft pastel gradient for light mode
        height: '60vh', // Reduced height
      }}
    >
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center text-center px-4 ps-5"
        style={{ minHeight: '50vh' }}
      >
        <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
          Turn Unused Software Licenses into Instant Cash
        </h1>
        <p className="lead mt-2 mb-3 animate__animated animate__fadeInUp animate__delay-1s">
          SoftSell helps businesses quickly sell their unused software licenses with a secure and easy process.
        </p>
        <a
          href="#contact"
          className="btn btn-dark btn-lg animate__animated animate__zoomIn animate__delay-2s"
        >
          Sell My Licenses
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
