// Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-heading">Projects</h1>
            <div className="project-card">
                <img src="project1.jpg" alt="Project 1" className="project-image" />
                <div className="project-details">
                    <h2 className="project-title">Medco</h2>
                    <p className="project-description">AI & ML powered mobile app for disease prediction & specialist consultation. Designed for rural areas & individuals hesitant to visit hospitals. Facilitates confidential diagnosis based on uploaded data, connecting users with specialist doctors for timely treatment.</p>
                    <p className="project-tech-stack">Tech Stack: Flutter, React js, Firebase, Tflite model</p>
                </div>
            </div>
            <div className="project-card">
                <img src="project2.jpg" alt="Project 2" className="project-image" />
                <div className="project-details">
                    <h2 className="project-title">Information Technology Website</h2>
                    <p className="project-description">College website</p>
                    <p className="project-tech-stack">Tech Stack: React js, Firebase</p>
                </div>
            </div>
            {/* Add more project cards here */}
        </div>
    );
};

export default Projects;
