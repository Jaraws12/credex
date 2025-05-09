import React, { useEffect } from 'react';
import { FaUserTie, FaUserCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Customer Testimonials</h2>
      <div className="row justify-content-center gx-4 gy-4">
        {/* Testimonial 1 */}
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <div className="card shadow-sm border-0 px-4 py-4 h-100">
            <FaUserTie size={40} className="mb-3 text-primary" />
            <p className="text-muted fst-italic mb-3">
              "Absolutely seamless experience! The platform is intuitive and the support team is amazing."
            </p>
            <h6 className="fw-bold mb-1">Alice Johnson</h6>
            <small className="text-secondary">Product Manager, TechNova Inc.</small>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
          <div className="card shadow-sm border-0 px-4 py-4 h-100">
            <FaUserCheck size={40} className="mb-3 text-primary" />
            <p className="text-muted fst-italic mb-3">
              "We saved a lot of money and time using this service. Strongly recommended!"
            </p>
            <h6 className="fw-bold mb-1">Rahul Verma</h6>
            <small className="text-secondary">CTO, InnoBytes Solutions</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
