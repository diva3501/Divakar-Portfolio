import React, { useState } from 'react';
import { GrReactjs } from 'react-icons/gr';
import { SiFlutter } from 'react-icons/si';
import { RiFirebaseFill, RiNodejsLine } from 'react-icons/ri';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { DiSqllite } from 'react-icons/di';
import './AboutMe.css';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('education');

    const toggleTab = (tab) => {
        setActiveTab(tab);
        if (tab === 'skills') {
            const skillsSection = document.getElementById('skills-section');
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="about-me">
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            <div className="tab-buttons">
                <button className={activeTab === 'education' ? 'active' : ''} onClick={() => toggleTab('education')}>Education</button>
                <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => toggleTab('skills')}>Skills</button>
            </div>
            <div className="content">
                <div className={`section ${activeTab === 'education' ? 'active' : ''}`}>
                    <h2>Education</h2>
                    <div className="education">
                    <div className={`section ${activeTab === 'education' ? 'active' : ''}`}>
                    <h2>Education</h2>
                    <div className="education">
                        <div className="education-info">
                            <h2 style={{ color: 'aliceblue' }}>Higher Secondary</h2>
                            <span style={{ color: '#FF014F' }}>2019 - 2022</span>
                            <h1 style={{ color: 'white', fontWeight: 900, fontSize: '30px' }}>Sri Vidhyalaskshmi Matric Hr Secondary School</h1>
                            <div className="res-line"></div>
                            <p style={{ width: '80%' }}>10th Grade - 92.6%</p>
                            <p style={{ width: '80%' }}>12th Grade - 95.6%</p>
                            <div className="rate">
                            <span>CGPA: 8.86/10</span>
                            </div>
                        </div>
                        <div className="education-info">
                            <h2 style={{ color: 'aliceblue' }}>Degree</h2>
                            <span style={{ color: '#FF014F' }}> (2022 - till now)</span>
                            <h1 style={{ color: 'white', fontWeight: 900, fontSize: '30px' }}>R.M.K Engineering College</h1>
                            <div className="res-line"></div>
                            <p style={{ width: '80%' }}>Current CGPA - 8.86/10</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div className={`section ${activeTab === 'skills' ? 'active' : ''}`} id="skills-section">
                    <h2>Skills</h2>
                    <div className="skills">
                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <div className="icon-list">
                                <div className="skill-icon">
                                    <GrReactjs size={60} className="skill-icon-react" />
                                </div>
                                <div className="skill-icon">
                                    <SiFlutter size={60} className="skill-icon-flutter" />
                                </div>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <div className="icon-list">
                                <div className="skill-icon">
                                    <RiFirebaseFill size={60} className="skill-icon-firebase" />
                                </div>
                                <div className="skill-icon">
                                    <BiLogoMongodb size={60} className="skill-icon-mongodb" />
                                </div>
                                <div className="skill-icon">
                                    <BiLogoPostgresql size={60} className="skill-icon-postgresql" />
                                </div>
                                <div className="skill-icon">
                                    <DiSqllite size={60} className="skill-icon-sqlite" />
                                </div>
                                <div className="skill-icon">
                                    <RiNodejsLine size={60} className="skill-icon-nodejs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
