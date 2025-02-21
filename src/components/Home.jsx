import React from 'react'

const Home = () => {
  return (
    <section id="hero">
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <a href="#">PJx.</a>
          </div>
            <div class="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
                
            </div>
        </div>

          <div class="hero-box">
            <h1 class="hero-heading">Paul John Acabo</h1>
            <h2 class="hero-2ndheading">I'm a Frontend Dev</h2>
              <p class="hero-desc">If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.</p>
            <div class="btn-box">
              <a href="#" class="cta-btn-try">Download CV</a> 
            </div>
            <div class="social-med">
              <a href=""><i class='bx bxl-github'></i></a>
              <a href=""><i class='bx bxl-facebook-square' ></i></a>
              <a href=""><i class='bx bxl-instagram'></i></a>
              <a href=""><i class='bx bxl-linkedin-square'></i></a>
            </div>

          </div>
      </div>
    </section>
  )
}

export default Home