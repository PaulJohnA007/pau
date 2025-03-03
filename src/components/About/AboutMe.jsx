import React from 'react';
import '../About/About.mod.css';

const AboutMe = () => {
  return (
    
    <section id="about-me"> 
    <div class="background">
        <div class="animated-bg"></div>
    </div>

      <div className="containerx">
        <h1 className="title">Welcome to My Gaming Realm</h1>
        <p className="intro mb-4">
  Hey there! I'm <span className="highlight">PJx</span>, a passionate gamer and developer who thrives in the digital world. I have competed in various gaming contests and aim to merge gaming with tech innovation.
</p>


        <article className="details">
          <div className="career">
            <h2>Career Goals</h2>
            <p>My mission is to revolutionize game development by creating immersive, AI-powered experiences.</p>
          </div>
          <div className="fun-fact">
            <h2>Fun Fact</h2>
            <p>I've reached Immortal rank solo</p>
          </div>
        </article>

        <aside className="skills">
          <h2>Skills & Expertise</h2>
          <ul>
            <li>Game Development (Unity, Unreal Engine)</li>
            <li>Programming (C++, Python, JavaScript)</li>
            <li>3D Modeling & Animation</li>
            <li>AI & Machine Learning in Gaming</li>
          </ul>
        </aside>

        <div className="cta">
          <h2>Let's Connect!</h2>
          <p>Want to collaborate or just chat about games? Hit me up!</p>
          <button className="gaming-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
