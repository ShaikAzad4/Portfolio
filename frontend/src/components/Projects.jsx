import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Find Chef',
      description: 'A full-stack AI powered solution gives you perfect prediction according to price,location,dishes etc. Fetching realtime data from mongodb and providing it to ChatModel',
      technologies: ['LangChain','LLM','Groq API','MongoDB','React', 'Node.js',],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/project1.jpg'
    },
    {
      title: 'ElevateU',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Firebase', 'SCSS', 'PWA'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/project2.jpg'
    },
    {
      title: 'Where Is Hostel',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.',
      technologies: ['LangChain','LLM','Gemeni API','MongoDB','React', 'Node.js',],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/project3.jpg'
    },
    {
      title: 'Disease Prescriber',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.',
      technologies: ['LangChain','LLM','Gemeni API','MongoDB','React', 'Node.js',],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/project3.jpg'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <span>Project Image</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;