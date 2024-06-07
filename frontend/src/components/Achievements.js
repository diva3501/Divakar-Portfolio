// Achievements.js
import React from 'react';
import Achievement from './Achievement';
import './Achievement.css';

const Achievements = () => {
    // Define the achievements
    const achievements = [
        {
            title: 'First Grade with distinction in Junior level typewriting in English',
            description: 'Received the highest grade in junior level typewriting examination conducted in English.'
        },
        {
            title: 'Top 02/129 Intra Department Coding Competition',
            description: 'Secured the second position out of 129 participants in the coding competition organized within the department.'
        },
        {
            title: 'Best student in Academics - Proficiency(Higher Secondary)',
            description: 'Recognized as the best student for academic proficiency during the higher secondary education.'
        }
    ];

    return (
        <div className="achievements-container" id="achievements">
            <h2 className="achievements-heading">Achievements</h2>
            <div className="achievements-list">
                {achievements.map((achievement, index) => (
                    <Achievement 
                        key={index} 
                        title={achievement.title} 
                        description={achievement.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Achievements;
