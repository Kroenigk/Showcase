import React from 'react';

import './skills.css';
import { getFeaturedTechnologies } from '../../data/technologies';

const Skills: React.FC = () => {
  const allTechnologies = getFeaturedTechnologies(12);
  // Create seamless scroll by duplicating the array
  const seamlessTechnologies = [...allTechnologies, ...allTechnologies];

  return (
    <div className="skillsPage">
      <div className="topBar">
        <h1>Skills</h1>
        <div className="tech-carousel-container">
          <div className="carousel-fade-left"></div>
          <div className="carousel-fade-right"></div>
          <div className="tech-carousel-scroll">
            {seamlessTechnologies.map((tech, index) => (
              <a
                key={`${tech.id}-${index}`}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-carousel-item"
                title={`Learn more about ${tech.name}`}
              >
                <div className="tech-item-content">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="tech-carousel-logo"
                  />
                  <span className="tech-carousel-name">{tech.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="skillsContent">
        <div className="skills-grid">
          <div className="skill-category">
            <h3>💻 Programming Languages</h3>
            <ul>
              <li>TypeScript / JavaScript</li>
              <li>C#</li>
              <li>C++</li>
              <li>Java</li>
              <li>SQLite / SQL</li>
              <li>Bash / Shell</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>🌐 Web Development</h3>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>HTML / CSS</li>
              <li>Vite</li>
              <li>Node.js</li>
              <li>Web Components</li>
              <li>Jest</li>
              <li>Unit Testing</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>🛠️ Tools & Technologies</h3>
            <ul>
              <li>Git / GitHub Actions</li>
              <li>CI/CD Pipelines</li>
              <li>SQL Databases</li>
              <li>REST APIs</li>
              <li>VS Code</li>
              <li>JIRA</li>
              <li>Postman</li>
              <li>Figma</li>
              <li>Docker</li>
              <li>NPM Packages</li>
              <li>Skaffold / Kubernetes</li>
              <li>Vite</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>👥 Professional Skills</h3>
            <ul>
              <li>Project Management (Certified)</li>
              <li>Agile Development</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Troubleshooting</li>
              <li>Technical Documentation</li>
              <li>Code Review</li>
              <li>Mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
