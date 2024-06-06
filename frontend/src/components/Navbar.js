import React from 'react';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav">
      <div className="nav-prof">
        <div className="prof-pic"></div>
        DIVAKAR
      </div>
      <div className="nav-opt">
        <ul>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>My Projects</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact Me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
