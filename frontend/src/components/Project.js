import React, { useState } from 'react';
import './Project.css';

const Project = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="project-container">
            <div className="project-card" onClick={toggleExpanded}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                {expanded && (
                    <div className="project-details">
                        <p className="project-description">{project.description}</p>
                        <p className="project-tech">Technologies used: {project.technologies}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
