import React from 'react';
//import './AboutPage.css'; // Optional: Create this file for custom styling.

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hi, I am [Your Name], a passionate [Your Profession/Field] with experience in [briefly describe skills or expertise].
      </p>
      <div className="about-sections">
        <section>
          <h2>Education</h2>
          <p>[Brief details about your education or certifications]</p>
        </section>
        <section>
          <h2>Experience</h2>
          <p>[Highlight relevant experience or projects]</p>
        </section>
        <section>
          <h2>Hobbies & Interests</h2>
          <p>[Share a few personal interests to add personality]</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
