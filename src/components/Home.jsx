import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="hero">
      <div className="background">
        <div className="animated-bg"></div>
      </div>
      <div className="container">
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">
            <a href="#">PJx.</a>
          </div>
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-box">
            <h1 className="hero-heading">Paul John Acabo</h1>
            <h2 className="hero-2ndheading">I'm a Developer</h2>
            <p className="hero-desc">
              If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.
            </p>
            <div className="btn-box">
              <a href="#" className="cta-btn-try">Download CV</a>
            </div>
            <div className="social-med">
              <a href="#"><i className="bx bxl-github"></i></a>
              <a href="#"><i className="bx bxl-facebook-square"></i></a>
              <a href="#"><i className="bx bxl-instagram"></i></a>
              <a href="#"><i className="bx bxl-linkedin-square"></i></a>
            </div>
          </div>
          <div className="hero-image">
            <img src="src/assets/1b1.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;