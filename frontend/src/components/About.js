// About.js
import React from 'react';
import './styles.css';
const About = () => {
  return (
    <section id="about" className="py-5 bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="display-4 animated fadeIn">About Me</h2>
            <p className="lead animated fadeInUp">Write something about yourself here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
