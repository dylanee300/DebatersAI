import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About DebatersAI</h1>
      <p className="about-text">
        DebatersAI is designed to help students prepare for school debates. Whether you're in middle school or high school, it helps you by:
      </p>
      <ul className="about-list">
        <li>Creating clear and effective debate speeches</li>
        <li>Finding trustworthy sources to support your points</li>
        <li>Improving your arguments to make them stronger</li>
        <li>Building your confidence by helping you practice</li>
      </ul>
      <p className="about-text">
        The tool is still being developed (version 1 will be available soon). You can try it out or even host it yourself, but official support isn’t available yet.
      </p>
      <p className="about-text">
        Our goal is to make debating easier, more enjoyable, and accessible to all students.
      </p>
    </div>
  );
};

export default About;
