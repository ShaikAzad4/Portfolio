import React from 'react';
import './Hero.css';
import profileImg from '../assets/clearimg.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">Shaik Azad</h1>
            <h2 className="hero-title">I build AI powered applications.</h2>
            <p className="hero-description">
              I'm a GenAI Engineer focused on building intelligent AI-driven products using LLMs, RAG pipelines, and agent frameworks to turn ideas into scalable, user-centered solutions.
              <span className="highlight"> Ignitz Solution</span>.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                Check out my projects!
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={profileImg} 
              alt="Shaik Azad" 
              className="profile-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;