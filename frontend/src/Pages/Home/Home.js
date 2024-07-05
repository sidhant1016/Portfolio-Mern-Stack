import React from 'react';
import './Home.css';
import profileImage from './officialpic.jfif';  // Adjust the path as per your directory structure

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm SIDHNAT , a passionate web developer.</p>
        </div>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </section>
      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill">MERN</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Python</div>
          <div className="skill">SQL</div>
          <div className="skill">Django</div>
        
        </div>
      </section>
    </div>
  );
}

export default Home;
