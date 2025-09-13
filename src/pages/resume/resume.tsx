import React from 'react';

import './resume.css';
// Import the PDF file
import resumePDF from '../../../assets/KylieRoenigkResume.pdf';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Kylie_Roenigk_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>Kylie Roenigk</h1>
        <div className="contact-info">
          <a href="mailto:kylieroenigk@gmail.com">kylieroenigk@gmail.com</a>
          <span>|</span>
          <a href="tel:3308145486">(330) 814-5486</a>
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/kylie-roenigk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <button className="download-btn" onClick={handleDownload}>
          Download Resume
        </button>
      </div>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="section-content">
          <div className="experience-item">
            <p>
              <strong>
                Ohio University, Russ College of Engineering and Technology
              </strong>{' '}
              — Athens, Ohio
            </p>
            <p>
              Bachelor of Science in Computer Science and Certification in
              Project Management
            </p>
            <p>
              <em>Expected Graduation: May 2027</em>
            </p>
            <p>Cumulative GPA: 4.0</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="section-content">
          <div className="experience-item">
            <h3>Ohio University (OIT), Student Software Engineering Intern</h3>
            <p className="job-details">
              <em>April 2024 – Present | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Built and maintained full-stack web applications using
                TypeScript, contributing to scalable and responsive system
                design.
              </li>
              <li>
                Designed and implemented backend features using Hapi, Joi, and
                Knex, with structured SQL-based solutions for robust data
                handling.
              </li>
              <li>
                Strengthened application reliability through unit testing, and
                optimized backend routing for improved performance and
                maintainability.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Ohio University (OIT), Software Engineering Intern</h3>
            <p className="job-details">
              <em>April 2025 – August 2025 | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Upgraded and maintained full-stack university web applications,
                resolving both frontend and backend issues; all systems are
                actively deployed and used by Ohio University.
              </li>
              <li>
                Leveraged Skaffold, Kubernetes, and Docker to build, test, and
                deploy applications to the university’s internal cluster;
                automated workflows using GitHub Actions and CI/CD pipelines.
              </li>
              <li>
                Designed, developed, and deployed a new web application with
                user-customizable styling, published for both internal and
                external use by Ohio University.
              </li>
              <li>
                Collaborated with the SSEP team via JIRA and Microsoft Teams;
                restored a key Docker-based Node.js training project after a
                year of inactivity and updated onboarding materials for future
                cohorts.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Woodridge Local Schools, Technology Intern</h3>
            <p className="job-details">
              <em>May 2021 – June 2023 | Peninsula, Ohio</em>
            </p>
            <ul>
              <li>
                Diagnosed and repaired over 100 Chromebooks, replacing screens,
                motherboards, and other components.
              </li>
              <li>
                Provided technical support across multiple school buildings for
                software and network issues.
              </li>
              <li>
                Contributed to large-scale district-wide tech deployments,
                ensuring successful implementation and user adoption.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Ohio University, Computer Science Ambassador</h3>
            <p className="job-details">
              <em>March 2025 – Present | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Represented the Russ College of Engineering by leading tours,
                promoting programs to prospective students, and engaging with
                alumni and donors at campus events.
              </li>
              <li>
                Strengthened public speaking and networking skills through
                outreach, recruitment, and collaboration with university
                leadership
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="section-content">
          <div className="project-item">
            <h3>Virtual Reality Game, Lead Developer</h3>
            <p className="project-details">
              <em>January 2025 – May 2025 | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Led development of Alchemy Artisans, a Unity 3D VR game for
                Oculus featuring immersive object interaction and a handwritten
                crafting system.
              </li>
              <li>
                Implemented a tag-based item recognition system, automatic item
                respawns, and a player-driven crafting economy, enabling users
                to fulfill customer requests and earn in-game currency for shop
                purchases
              </li>
              <li>
                Coordinated a team of four throughout a semester-long project,
                delivering a fully integrated and showcased VR experience.
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Custom Workload Estimator Web App</h3>
            <p className="project-details">
              <em>April 2025 – August 2025 | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Developed a responsive Custom Workload Estimator using
                TypeScript and Vite, allowing users to input tasks, customize
                categories, and calculate time commitments in real-time
              </li>
              <li>
                Deployed the app on GitHub Pages with a fast, single-page
                architecture optimized for usability and cross-device access
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="section-content">
          <div className="skills-grid">
            <div className="skill-category">
              <strong>Languages:</strong> C/C++, Java, JavaScript, Python,
              TypeScript, C#
            </div>
            <div className="skill-category">
              <strong>Web Dev:</strong> HTML/CSS, Angular, Node.js, SQL/SQLite,
              RESTful APIs, Web Application Development
            </div>
            <div className="skill-category">
              <strong>Tools:</strong> Git, VS Code, JIRA, NPM, Hapi, Joi, Knex,
              GitHub Workflow, Docker, Skaffold, Vite, Unit Testing with
              Jest/Node.js
            </div>
            <div className="skill-category">
              <strong>Software Engineering:</strong> Agile Development,
              end-to-end Troubleshooting, Software Upgrades, Database Design,
              CI/DC Pipeline
            </div>
            <div className="skill-category">
              <strong>Professional Skills:</strong> Project Management,
              Technical Communication, Team Collaboration, Task Delegation,
              Workflow Automation
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Honors and Awards</h2>
        <div className="section-content">
          <ul>
            <li>Arnold Engineering Scholarship (2023–2025)</li>
            <li>Valedictorian, Class of 2023 — Cuyahoga Falls, Ohio</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
