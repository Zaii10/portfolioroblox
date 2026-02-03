import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Full-Stack Developer Junior</h2>
      <div className="about-content">
        <img
          src="IMG_1317.webp"
          alt="Profile"
          className="about-image"
          onError={(e: any) => {
            e.target.src =
              "IMG_1317.webp";
          }}
        />
        <p className="about-text">
          I am a passionate full-stack developer with expertise in modern web
          technologies. With several years of experience in building scalable
          Web applications, I focus on creating efficient and user-friendly
          solutions. My approach combines technical excellence with creative
          problem-solving to deliver results.
        </p>
      </div>
    </section>
  );
};

export default About;
