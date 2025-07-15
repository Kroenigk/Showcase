import React from 'react';
import './projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projectsPage">
      <div className="topBar">
        <h1>My Projects</h1>
      </div>

      <div className="projectsContent">
        <div className="projectCard">
          <div className="project-header">
            <h2>🧮 Workload Estimator</h2>
            <span className="project-status">Active</span>
          </div>
          <p>A dynamic tool to calculate estimated academic workload using Angular and SQLite. Features real-time calculations, data persistence, and an intuitive user interface for academic planning.</p>
          <div className="tech-stack">
            <span className="tech-tag">Angular</span>
            <span className="tech-tag">SQLite</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">CSS3</span>
          </div>
          <div className="project-links">
            <a 
              href="https://ohiouniversity.github.io/WorkEstimator/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Demo
            </a>
            <a 
              href="https://github.com/OhioUniversity/WorkEstimator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              Source Code
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="project-header">
            <h2>🥽 Alchemy Artisans (VR Game)</h2>
            <span className="project-status">Completed</span>
          </div>
          <p>Unity-based VR crafting game with Oculus integration and hand gesture recognition. Led a team of 4 developers through full development lifecycle including game mechanics, UI/UX, and VR optimization.</p>
          <div className="tech-stack">
            <span className="tech-tag">Unity 3D</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">Oculus SDK</span>
            <span className="tech-tag">VR Development</span>
          </div>
          <div className="project-links">
            <button className="project-btn">View Demo</button>
            <button className="project-btn secondary">Learn More</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="project-header">
            <h2>🌐 Full-Stack Web Applications</h2>
            <span className="project-status">Ongoing</span>
          </div>
          <p>Professional web applications developed during internship using modern technologies. Includes backend API development, database design, and responsive frontend implementations with emphasis on performance and scalability.</p>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">REST APIs</span>
            <span className="tech-tag">Hapi.js</span>
          </div>
          <div className="project-links">
            <button className="project-btn">Case Study</button>
            <button className="project-btn secondary">Technologies</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="project-header">
            <h2>📱 Developer Showcase</h2>
            <span className="project-status">Live</span>
          </div>
          <p>This very portfolio site! Built with React, TypeScript, and Vite. Features responsive design, smooth animations, and modern glass morphism styling. Deployed using GitHub Pages with automated CI/CD pipeline.</p>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">GitHub Pages</span>
          </div>
          <div className="project-links">
            <a 
              href="https://Kroenigk.github.io/Showcase/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn"
            >
              Live Site
            </a>
            <a 
              href="https://github.com/Kroenigk/Showcase" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
