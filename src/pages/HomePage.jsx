import React from 'react';
import { Link } from 'react-router-dom';
//import './HomePage.css'; // Optional: Create this file for custom styling.

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page. Explore my work and get to know me better!</p>
      <div className="home-navigation">
        <Link to="/about" className="btn">About Me</Link>
        <Link to="/projects" className="btn">My Projects</Link>
        <Link to="/contact" className="btn">Contact Me</Link>
      </div>
    </div>
  );
};

export default HomePage;
