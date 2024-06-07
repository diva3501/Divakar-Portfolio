import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="text-list">
                        <p className="skill-item">Java</p>
                        <p className="skill-item">Python</p>
                        <p className="skill-item">C/C++</p>  
                        <p className="skill-item">SQL</p>                      
                        <p className="skill-item">JavaScript</p>
                        
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Coursework</h3>
                    <div className="text-list">
                        <p className="skill-item">Advanced Java Programming</p>
                        <p className="skill-item">Data Structures</p>
                        <p className="skill-item">Design and Analysis of Algorithm</p>
                        <p className="skill-item">Database Management System</p>
                        <p className="skill-item">Artificial Intelligence and Machine Learning</p>
                        <p className="skill-item">Web Development and Frameworks</p>
                        <p className="skill-item">Software Development Practices</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
