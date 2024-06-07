import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

const Home = () => {
    const openResume = () => {
        window.open(process.env.PUBLIC_URL + '/Resume.pdf', '_blank');
    };

    return (
        <div className="home wlcm-page" id="wlcm">
            <div className="w-l-sec">
                <div className="cont-box1">
                    <span style={{ color: "gray", fontWeight: 900 }}>WELCOME TO MY WORLD</span><br />
                    <h1 className="ah-headline">
                        <span style={{ color: "white" }}>Hello, I am <span style={{ color: "#FF014F" }}>Divakar G</span></span> <br />
                        <span className="ah-words-wrapper" style={{ color: "white" }}>
                            <b className="is-visible">FullStack Developer</b>
                        </span>
                    </h1>
                    <p style={{ color: "gray", width: "80%" }}>As a passionate tech enthusiast, I'm on a journey to explore a myriad of stacks, 
                    honing my skills across diverse technologies. Armed with a commendable CGPA of 8.86, I bring both academic excellence and 
                    practical expertise to the table. Beyond coding, I excel as a proficient public speaker, adept at articulating complex ideas 
                    with clarity and conviction. Driven by a relentless pursuit of innovation, 
                    I'm committed to leveraging technology to make a meaningful impact in our ever-evolving digital landscape.</p>
                    <button className="resume-button" onClick={openResume}>Resume</button>
                </div>
                <div className="soc-box">
                    <div className="social">
                        <h4 style={{ color: "gray" }}>FIND WITH ME</h4>
                        
                        <SocialIcon url="https://www.instagram.com/being_divakar/" className="social-icon" style={{ gridArea: '1 / 2' }} />
                        <SocialIcon url="https://www.linkedin.com/in/divakar-g-469351263/" className="social-icon" style={{ gridArea: '2 / 1' }} />
                        <SocialIcon url="https://github.com/diva3501" className="social-icon" style={{ gridArea: '2 / 2' }} />
                        <SocialIcon url="https://x.com/Divakar3501" className="social-icon" style={{ gridArea: '3 / 1' }} />
                        <SocialIcon url="https://www.facebook.com/profile.php?id=100091585033458" className="social-icon" style={{ gridArea: '1 / 1' }} />
                    </div>
                </div>
            </div>

            <div className="w-r-sec">
                <div className="pic">
                    <img
                        src={process.env.PUBLIC_URL + '/self.jpg'}
                        alt="Profile"
                        className="self-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
