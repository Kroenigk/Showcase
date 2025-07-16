import React from 'react';
import './skills.css';

const Skills: React.FC = () => {
  return (
    <div className="skillsPage">
      <div className="topBar">
        <h1>My Skills</h1>
      </div>

      <div className="skillsContent">
        <div className="skills-grid">
          <div className="skill-category">
            <h3>💻 Programming Languages</h3>
            <ul>
              <li>TypeScript / JavaScript</li>
              <li>Python</li>
              <li>C++ / C#</li>
              <li>Java</li>
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
            </ul>
          </div>

          <div className="skill-category">
            <h3>👥 Professional Skills</h3>
            <ul>
              <li>Project Management (Certified)</li>
              <li>Agile Development</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Technical Documentation</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
