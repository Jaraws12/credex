import React, { useEffect } from 'react';
import { FaFileUpload, FaSearchDollar, FaMoneyCheckAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // only animate once
    });
  }, []);

  return (
    <section className="py-5 text-center" id="how-it-works">
      <h2 className="display-4 fw-bold mb-4">How It Works</h2>
      <div className="container">
        <div className="row">
          {/* Step 1: Upload License */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow-sm border-0 p-4">
              <FaFileUpload size={50} className="mb-3 text-primary" />
              <h4 className="fw-bold">Upload License</h4>
              <p>Simply upload your unused software licenses to our platform.</p>
            </div>
          </div>
          {/* Step 2: Get Valuation */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow-sm border-0 p-4">
              <FaSearchDollar size={50} className="mb-3 text-primary" />
              <h4 className="fw-bold">Get Valuation</h4>
              <p>We’ll evaluate your license and provide you with an instant quote.</p>
            </div>
          </div>
          {/* Step 3: Get Paid */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow-sm border-0 p-4">
              <FaMoneyCheckAlt size={50} className="mb-3 text-primary" />
              <h4 className="fw-bold">Get Paid</h4>
              <p>Once the valuation is confirmed, we transfer the payment to you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

