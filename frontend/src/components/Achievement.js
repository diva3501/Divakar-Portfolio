import React from 'react';
import './Achievement.css';

const Achievement = ({ title, description }) => {
    return (
        <div className="achievement">
            <div className="pin"></div>
            <div className="text">
                <h3 className="achievement-title">{title}</h3>
                <p className="achievement-description">{description}</p>
            </div>
        </div>
    );
};

export default Achievement;
