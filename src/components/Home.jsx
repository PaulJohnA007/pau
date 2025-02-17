import React from 'react'

const Home = () => {
  return (
    <section id="hero">
      <div class="container">
        <div class="navbar">
          <div class="logo">
          <img src=" " alt="PORTFOLIO" />
          </div>
            <div class="menu">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
            </div>
        </div>

          <div class="hero-box">
            <h1 class="hero-heading">Hi Good Day to you.</h1>
            <p class="hero-desc">If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.</p>
            <div class="btn-box">
              <a href="#" class="cta-btn-try">Try Now</a> 
            </div>

          </div>
      </div>
    </section>
  )
}

export default Home