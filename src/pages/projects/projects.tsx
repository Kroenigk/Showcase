import React, { useState } from 'react';
import './projects.css';

const Projects: React.FC = () => {
  const [isVRModalOpen, setIsVRModalOpen] = useState(false);
  const [isFullStackModalOpen, setIsFullStackModalOpen] = useState(false);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openVRModal = () => {
    setIsVRModalOpen(true);
  };

  const closeVRModal = () => {
    setIsVRModalOpen(false);
  };

  const openFullStackModal = () => {
    setIsFullStackModalOpen(true);
  };

  const closeFullStackModal = () => {
    setIsFullStackModalOpen(false);
  };

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
          <p>
            A dynamic tool to calculate estimated academic workload using
            Angular and SQLite. Features real-time calculations, data
            persistence, and an intuitive user interface for academic planning.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">Angular</span>
            <span className="tech-tag">Github Workflow</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">NPM</span>
            <span className="tech-tag">Unit Testing</span>
          </div>
          <div className="project-links">
            <button
              className="project-btn"
              onClick={() =>
                handleLinkClick('https://ohiouniversity.github.io/WorkEstimator/')
              }
            >
              View Demo
            </button>
            <button
              className="project-btn secondary"
              onClick={() =>
                handleLinkClick('https://github.com/OhioUniversity/WorkEstimator')
              }
            >
              Source Code
            </button>
          </div>
        </div>

        <div className="projectCard">
          <div className="project-header">
            <h2>🥽 Alchemy Artisans (VR Game)</h2>
            <span className="project-status">Completed</span>
          </div>
          <p>
            Unity-based VR crafting game with Oculus integration and hand
            gesture recognition. Led a team of 4 developers through full
            development lifecycle including game mechanics, UI/UX, and VR
            optimization.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">Unity 3D</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">Oculus SDK</span>
            <span className="tech-tag">VR Development</span>
            <span className="tech-tag">Game Design</span>
            <span className="tech-tag">Unit Testing</span>
          </div>
          <div className="project-links">
            <button className="project-btn" onClick={() => alert('Demo coming soon!')}>
              View Demo
            </button>
            <button className="project-btn secondary" onClick={openVRModal}>
              Learn More
            </button>
          </div>
        </div>

        <div className="projectCard">
          <div className="project-header">
            <h2>🌐 Full-Stack Web Applications</h2>
            <span className="project-status">Ongoing</span>
          </div>
          <p>
            Professional web applications developed during internship using
            modern technologies. Includes backend API development, database
            design, and responsive frontend implementations with emphasis on
            performance and scalability.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">REST APIs</span>
            <span className="tech-tag">Hapi.js</span>
            <span className="tech-tag">Jest</span>
            <span className="tech-tag">Angular</span>
            <span className="tech-tag">Github Workflow</span>
            <span className="tech-tag">TypeScript</span>
          </div>
          <div className="project-links">
            <a
              href="https://www.ohio.edu/oit/career-opportunities/student-employment/student-programs/ssep"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              See program
            </a>
            <button className="project-btn secondary" onClick={openFullStackModal}>
              Learn More
            </button>
          </div>
        </div>

        <div className="projectCard">
          <div className="project-header">
            <h2>📱 Developer Showcase</h2>
            <span className="project-status">Live</span>
          </div>
          <p>
            This very portfolio site! Built with React, TypeScript, and Vite.
            Features responsive design, smooth animations, and modern glass
            morphism styling. Deployed using GitHub Pages with automated CI/CD
            pipeline.
          </p>
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
              View Live Site
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

      {/* VR Project Modal */}
      {isVRModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeVRModal}></div>
          <div className="modal">
            <div className="modal-header">
              <h2>🥽 Alchemy Artisans VR Game</h2>
              <button className="modal-close" onClick={closeVRModal}>
                ✕
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>Project Overview</h3>
                <p>
                  Alchemy Artisans is an immersive VR crafting game designed for
                  the Oculus platform. Players combine magical ingredients to
                  create potions and artifacts in a fully interactive 3D
                  environment. The game features intuitive hand gesture controls
                  and realistic physics-based interactions.
                </p>
              </div>

              <div className="modal-section">
                <h3>My Role & Responsibilities</h3>
                <ul>
                  <li>
                    <strong>Team Lead:</strong> Managed a cross-functional team of 4
                    developers
                  </li>
                  <li>
                    <strong>VR Development:</strong> Implemented Oculus SDK
                    integration and hand tracking
                  </li>
                  <li>
                    <strong>Game Mechanics:</strong> Designed and coded crafting
                    system and item recognition
                  </li>
                  <li>
                    <strong>Project Management:</strong> Coordinated sprints and
                    deliverables throughout semester
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Created intuitive VR interfaces
                    and user interactions
                  </li>
                </ul>
              </div>

              <div className="modal-section">
                <h3>Technical Highlights</h3>
                <div className="tech-highlights">
                  <div className="tech-highlight">
                    <h4>🎮 VR Integration</h4>
                    <p>
                      Custom Oculus SDK implementation with hand gesture
                      recognition and haptic feedback
                    </p>
                  </div>
                  <div className="tech-highlight">
                    <h4>⚡ Physics Engine</h4>
                    <p>
                      Unity's physics system optimized for VR with realistic object
                      interactions
                    </p>
                  </div>
                  <div className="tech-highlight">
                    <h4>🏗️ Modular Architecture</h4>
                    <p>
                      Component-based design allowing for easy expansion and
                      modification
                    </p>
                  </div>
                  <div className="tech-highlight">
                    <h4>💰 Economy System</h4>
                    <p>
                      Player-driven marketplace with dynamic pricing and item
                      trading
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Development Timeline</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="timeline-date">Week 1-3</span>
                    <span className="timeline-desc">
                      Project planning, team formation, and initial prototypes
                    </span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Week 4-8</span>
                    <span className="timeline-desc">
                      Core VR mechanics, hand tracking, and basic crafting system
                    </span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Week 9-12</span>
                    <span className="timeline-desc">
                      Advanced features, UI polish, and economy implementation
                    </span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Week 13-15</span>
                    <span className="timeline-desc">
                      Testing, optimization, and final presentation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Full-Stack Web Applications Modal */}
      {isFullStackModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeFullStackModal}></div>
          <div className="modal">
            <div className="modal-header">
              <h2>🌐 Full-Stack Web Applications</h2>
              <button className="modal-close" onClick={closeFullStackModal}>
                ✕
              </button>
            </div>
            
            <div className="modal-content">
              <div className="modal-section">
                <h3>Internship Overview</h3>
                <p>
                  As a Software Engineering Intern at Ohio University's Office of Information Technology, 
                  I contribute to enterprise-level web applications that serve the university community. 
                  My work spans both frontend and backend development, with a focus on creating scalable, 
                  maintainable solutions for complex business requirements.
                </p>
              </div>

              <div className="modal-section">
                <h3>Key Projects & Contributions</h3>
                <div className="tech-highlights">
                  <div className="tech-highlight">
                    <h4>📊 Student Information System</h4>
                    <p>Enhanced frontend components using Angular and TypeScript, improving user experience and data visualization</p>
                  </div>
                  <div className="tech-highlight">
                    <h4>🔌 REST API Development</h4>
                    <p>Built and optimized backend services using Hapi.js framework with comprehensive error handling</p>
                  </div>
                  <div className="tech-highlight">
                    <h4>🗄️ Database Optimization</h4>
                    <p>Designed efficient SQL queries and database schemas using Knex.js for improved performance</p>
                  </div>
                  <div className="tech-highlight">
                    <h4>🧪 Testing & Quality Assurance</h4>
                    <p>Implemented comprehensive unit testing with Jest and Node Testing frameworks</p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Technical Responsibilities</h3>
                <ul>
                  <li><strong>Frontend Development:</strong> Built responsive web interfaces using Angular, React, and TypeScript</li>
                  <li><strong>Backend Services:</strong> Developed RESTful APIs with Hapi.js, Joi validation, and Knex query builder</li>
                  <li><strong>Database Management:</strong> Designed and optimized SQL databases for enterprise applications</li>
                  <li><strong>Testing & Debugging:</strong> Implemented comprehensive test suites and performed code debugging</li>
                  <li><strong>Code Review:</strong> Participated in peer code reviews and maintained coding standards</li>
                  <li><strong>Agile Development:</strong> Collaborated in sprint planning and daily standups using JIRA</li>
                </ul>
              </div>

              <div className="modal-section">
                <h3>Technologies & Tools</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="timeline-date">Frontend</span>
                    <span className="timeline-desc">Angular, React, TypeScript, HTML5, CSS3, responsive design</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Backend</span>
                    <span className="timeline-desc">Node.js, Hapi.js, RESTful APIs, Joi validation, Knex.js</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Database</span>
                    <span className="timeline-desc">SQL Server, PostgreSQL, database design, query optimization</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">DevOps</span>
                    <span className="timeline-desc">Git, GitHub Workflows, CI/CD pipelines, NPM, VS Code</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Testing</span>
                    <span className="timeline-desc">Jest, Node Testing, unit testing, integration testing</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-date">Project Mgmt</span>
                    <span className="timeline-desc">JIRA, Agile methodology, sprint planning, code reviews</span>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Professional Growth</h3>
                <p>
                  This internship has provided invaluable experience in enterprise software development, 
                  working with legacy systems while implementing modern development practices. I've gained 
                  expertise in full-stack development workflows, collaborative coding environments, and 
                  the challenges of maintaining large-scale applications serving thousands of users.
                </p>
                <p>
                  The experience has strengthened my understanding of software architecture, database design, 
                  and the importance of writing maintainable, well-tested code in professional environments.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
