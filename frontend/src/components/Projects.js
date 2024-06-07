import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Medco',
            description: 'AI & ML powered mobile app for disease prediction & specialist consultation. Designed for rural areas & individuals hesitant to visit hospitals. Facilitates confidential diagnosis based on uploaded data, connecting users with specialist doctors for timely treatment.',
            technologies: 'Flutter, React js, Firebase, Tflite model',
            image: '/medco.jpg',
            github: 'https://github.com/rohitvijayan1111/MEDCO'
        },
        {
            title: 'Information Technology Website',
            description: 'I spearheaded the development of a comprehensive website for my Department of Information Technology, featuring distinct login portals for both teachers and students. The platform empowers teachers to effortlessly share updates, celebrate student achievements, broadcast announcements, and outline upcoming events. Additionally, the inclusion of a group chat functionality facilitates seamless communication within the departmental community. This project offered me invaluable hands-on experience in website development, user authentication systems, and fostering digital collaboration in an educational setting. Through meticulous planning and execution, we successfully created a dynamic online hub that enhances communication and engagement among faculty and students alike.',
            technologies: 'React js, Firebase',
            image: '/rmkit.jpg',
            github: 'https://github.com/RithikRaja28/RMKEC-IT'
        },
        {
            title: 'Personal Task Manager',
            description: 'Venturing into my maiden project with PostgreSQL as the backend, I crafted a Personal Task Manager. This application enables users to create, edit, and prioritize tasks, fostering efficient organization. The journey was not merely technical; it was a profound learning experience. Working with PostgreSQL enriched my understanding of database management systems while honing my problem-solving skills. This project, although modest in scale, served as a pivotal stepping stone in my journey as a developer, laying a solid foundation for future endeavors.',
            technologies: 'React js, PostgreSQL',
            image: '/taskmanager.jpg',
            github: 'https://github.com/diva3501/PersonalTaskManager'
        },
        {
            title: 'Divakar\'s Portfolio',
            description: 'I\'m currently building my portfolio, a digital showcase of my skills and projects. For the frontend, I\'m utilizing React.js for its flexibility and component-based architecture, alongside CSS and Bootstrap for sleek and responsive design. On the backend, Node.js and Express.js are powering the server-side logic and RESTful API development, while MongoDB handles data storage. I\'m implementing authentication using JSON Web Tokens (JWT) for security. Continuous integration and deployment pipelines ensure smooth workflows, with deployment likely on platforms like Heroku or Netlify. This project serves as a testament to my proficiency in modern web development technologies and methodologies.',
            technologies: 'React.js, CSS, Bootstrap, Node.js, Express.js, MongoDB, JSON Web Tokens (JWT), Heroku, Netlify',
            image: '/portfolio.jpeg',
            github: 'https://github.com/diva3501/Divakar-Portfolio'
        },
        {
            title: 'Dice Game',
            description: 'A dynamic dice game project showcasing my proficiency in web development. Utilizing HTML for structure and CSS for styling, it offers an aesthetically pleasing interface. JavaScript powers the game\'s functionality, providing interactive dice rolling and score tracking features. This project demonstrates my ability to create engaging and interactive web applications through the integration of frontend technologies.',
            technologies: 'HTML, CSS, Javascript',
            image: '/dice.jpg',
            github: 'https://github.com/diva3501/Dicegame'
        },
        {
            title: 'BookSky',
            description: 'Booksky is a web application designed for managing book records with CRUD (Create, Read, Update, Delete) functionality, developed using HTML, CSS, and JavaScript. This project enables users to seamlessly add, view, edit, and delete book entries, offering a user-friendly interface for efficient book management. With HTML providing the structure, CSS handling the styling, and JavaScript driving the dynamic behavior, Booksky exemplifies my proficiency in frontend web development and database operations. Whether for personal libraries or small-scale bookstores, Booksky empowers users with a robust tool for organizing and maintaining their book collections.',
            technologies: 'HTML, CSS, Javascript',
            image: '/crud.jpeg',
            github: 'https://github.com/diva3501/Bookshy'
        }
    ];

    return (
        <div className="projects-container" id="proj">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
