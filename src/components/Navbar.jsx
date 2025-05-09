import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('bg-dark', 'text-white');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('bg-dark', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light shadow-sm px-3">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" href="#">
          SoftSell
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <a className="nav-link active" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
