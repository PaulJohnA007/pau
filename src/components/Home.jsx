import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const closeModal = () => setIsModalOpen(false); // Function to close modal

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
            <Link to="/">Home🏡</Link>
            <Link to="/about">About💡</Link>
            <Link to="/blogspot">Blog📝</Link>  
            <Link to="/project">Projects🛠️</Link>
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
              <a href="./assets/CV.pdf" className="cta-btn-try" download="./assets/CV.pdf">Download CV</a>
              <a
                href="#"
                className="cta-btn-try experience-btn"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Experience
              </a>
            </div>
            <div className="social-med">
              <a href="https://github.com/PaulJohnA007"><i className="bx bxl-github"></i></a>
              <a href="https://www.facebook.com/pj.acabo.1"><i className="bx bxl-facebook-square"></i></a>
              <a href="https://www.instagram.com/pauljohnacabo?igsh=MTcyYWcxZ2x0ZXduNw=="><i className="bx bxl-instagram"></i></a> 
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <section className="experience">
              <h2>Experience</h2>
              <div className="experience-item">
                <h4>Frontend Developer</h4>
                <p>Worked on building responsive and interactive web applications using React and CSS frameworks.</p>
                <span>Jan 2023 - Present</span>
              </div>
              <div className="experience-item">
                <h4>UI/UX Designer</h4>
                <p>Designed user-friendly interfaces and improved user experience for mobile and web platforms.</p>
                <span>Jun 2021 - Dec 2022</span>
              </div>
              <div className="experience-item">
                <h4>Intern</h4>
                <p>Assisted in developing internal tools and gained hands-on experience with modern web technologies.</p>
                <span>Jan 2021 - May 2021</span>
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
    
  );
};

export default Home;
