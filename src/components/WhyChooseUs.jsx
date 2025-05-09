import React, { useEffect } from 'react';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaUserFriends,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="why-choose-us"
      className="py-5 text-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Why Choose Us
      </h2>
      <div className="container">
        <div className="row">
          {/* Benefit 1: Reliability */}
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow-sm border-0 p-4 rounded-lg bg-white dark:bg-gray-800 transition duration-300">
              <FaCheckCircle size={50} className="mb-3 text-green-500" />
              <h4 className="fw-bold text-gray-800 dark:text-white">Reliability</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform ensures quick and reliable transactions every time.
              </p>
            </div>
          </div>
          {/* Benefit 2: Security */}
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow-sm border-0 p-4 rounded-lg bg-white dark:bg-gray-800 transition duration-300">
              <FaShieldAlt size={50} className="mb-3 text-blue-500" />
              <h4 className="fw-bold text-gray-800 dark:text-white">Security</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize the security of your data and transactions.
              </p>
            </div>
          </div>
          {/* Benefit 3: Support */}
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow-sm border-0 p-4 rounded-lg bg-white dark:bg-gray-800 transition duration-300">
              <FaHeadset size={50} className="mb-3 text-yellow-500" />
              <h4 className="fw-bold text-gray-800 dark:text-white">24/7 Support</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our team is available 24/7 to assist you with any issues.
              </p>
            </div>
          </div>
          {/* Benefit 4: User Friendly */}
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="card shadow-sm border-0 p-4 rounded-lg bg-white dark:bg-gray-800 transition duration-300">
              <FaUserFriends size={50} className="mb-3 text-red-400" />
              <h4 className="fw-bold text-gray-800 dark:text-white">User Friendly</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform is intuitive and easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
