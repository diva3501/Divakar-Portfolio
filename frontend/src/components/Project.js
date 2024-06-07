import React, { useState } from 'react';
import './Projects.css';

const Project = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`project-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!expanded && (
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>
            )}
            {!expanded && (
                <h3 className="project-title">{project.title}</h3>
            )}
            {expanded && (
                <div className="project-details" id="proj" >
                    <h3 className="project-full-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-tech">Technologies used: {project.technologies}</p>
                    <a href={project.github} className="project-github-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
            )}
            {!expanded && (
                <div className="explore-button">
                    <span>Explore</span>
                </div>
            )}
        </div>
    );
};

export default Project;
