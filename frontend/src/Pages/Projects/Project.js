// src/Projects.js
import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'TRAVEL APP',
    description: 'This is travel website using Python and Django Framework',
    link: 'https://github.com/sidhant1016/Travel-App/tree/master',
  },
  {
    title: 'WHATS-APP',
    description: 'This is Chat application using socket.io',
    link: 'https://github.com/sidhant1016/WHATS-APP',
  },
  {
    title: 'BOOKING TICKETS WEBSITE',
    description: 'quick and easy trip planner website using Reactjs',
    link: 'https://github.com/sidhant1016/Booking-app',
  },
  {
    title: 'MERN STACK RESTFUL-API',
    description: 'Task of MERN Stack',
    link: 'https://github.com/sidhant1016/Restful-Api-',
  },
  {
    title: 'NEWS APP ',
    description: 'News website using backend only without UI using Node js ',
    link: 'https://github.com/sidhant1016/news',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
