import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) tempErrors.company = 'Company is required';
    if (!formData.licenseType) tempErrors.licenseType = 'Select a license type';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate data-aos="fade-up">
        <div className="mb-3" data-aos="fade-up">
          <label className="form-label">Name*</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
          <label className="form-label">Email*</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
          <label className="form-label">Company*</label>
          <input
            type="text"
            className={`form-control ${errors.company ? 'is-invalid' : ''}`}
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && <div className="invalid-feedback">{errors.company}</div>}
        </div>

        <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
          <label className="form-label">License Type*</label>
          <select
            className={`form-select ${errors.licenseType ? 'is-invalid' : ''}`}
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
          >
            <option value="">-- Select License Type --</option>
            <option value="Single User">Single User</option>
            <option value="Multi User">Multi User</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          {errors.licenseType && (
            <div className="invalid-feedback">{errors.licenseType}</div>
          )}
        </div>

        <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
          <label className="form-label">Message*</label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100" data-aos="fade-up" data-aos-delay="500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
