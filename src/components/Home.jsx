import React from 'react';
 

const Home = () => {
  return (
    <section id="hero">
      <div className="container">
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">
            <a href="#">PJx.</a>
          </div>
          <div className="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Projects</a>
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
 
          
        </div>
      </div>
    </section>
  );
};

export default Home;
