import React, { useState, useRef } from 'react';
import { GrReactjs } from 'react-icons/gr';
import { SiFlutter } from 'react-icons/si';
import { RiFirebaseFill, RiNodejsLine } from 'react-icons/ri';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { DiSqllite } from 'react-icons/di';
import './AboutMe.css';
import Skills from './Skills';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');
    const skillsRef = useRef(null);

    const toggleTab = (tab) => {
        setActiveTab(tab);
        if (tab === 'skills') {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="about-me" id="about">
            <div className="about-header">
                <h1>About Me</h1>
            
            <div className="tab-buttons">
                <button className={activeTab === 'education' ? 'active' : ''} onClick={() => toggleTab('education')}>Education</button>
                <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => toggleTab('skills')}>Experienced In</button>
            </div>
        </div>
            <div className="content">
                <div className={`section ${activeTab === 'education' ? 'active' : ''}`}>
                    <h2>Education</h2>
                    <div className="education">
                        <div className="education-info">
                            <h2 style={{ color: '#FF014F' }}>Higher Secondary</h2>                           
                            <h1 style={{ color: 'white', fontWeight: 900, fontSize: '30px' }}>Sri Vidhyalaskshmi Matric Hr Secondary School</h1>
                            <span style={{ color: '#FF014F' }}>2019 - 2022</span>
                        </div>
                        <div className="r-cont">
                            <div className="r-cont-box">
                                <div className="res-line"></div>
                                <p style={{ width: '80%' }}>10th Grade - 92.6%</p>
                                <p style={{ width: '80%' }}>12th Grade - 95.6%</p>
                            </div>
                            <div className="r-cont-box">
                                <h2 style={{ color: '#FF014F' }}>Degree</h2>
                                <h1 style={{ color: 'white', fontWeight: 900, fontSize: '30px' }}>R.M.K Engineering College</h1>
                                <span style={{ color: '#FF014F' }}> 2022 - till now</span>
                                <div className="res-line"></div>
                                <p style={{ width: '80%' }}>Current CGPA - 8.86/10</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={skillsRef} className={`section ${activeTab === 'skills' ? 'active' : ''}`}>
                    <h2>Experienced In</h2>
                    <div className="skills">
                        <div className="skill-categoryy">
                            <h3 style={{ color: 'white' }}>Frontend</h3>
                            <div className="icon-list">
                                <GrReactjs className="skill-icon icon" />
                                <SiFlutter className="skill-icon icon" />
                            </div>
                        </div>
                        <div className="skill-categoryy">
                            <h3 style={{ color: 'white' }}>Backend</h3>
                            <div className="icon-list">
                                <RiFirebaseFill className="skill-icon icon" />
                                <BiLogoMongodb className="skill-icon icon" />
                                <BiLogoPostgresql className="skill-icon icon" />
                                <DiSqllite className="skill-icon icon" />
                                <RiNodejsLine className="skill-icon icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
