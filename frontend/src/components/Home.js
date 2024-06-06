// Home.js
import React from 'react';
import './styles.css';
const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <img src="your-photo.jpg" alt="Your Photo" className="img-fluid rounded-circle mb-4 animated fadeInDown" />
            <h1 className="display-4 animated fadeInUp">Hello, I am Divakar G</h1>
            <p className="lead animated fadeIn">Full Stack Engineer</p>
            <a href="your-resume.pdf" className="btn btn-primary btn-lg animated fadeIn">Get Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
