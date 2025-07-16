import React from 'react';
import './resume.css';

const Resume: React.FC = () => {
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
        <a href="public/Kylie_Roenigk_Resume.pdf" download>
          <button className="download-btn">Download Resume</button>
        </a>
      </div>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="section-content">
          <p>
            <strong>
              Ohio University, Russ College of Engineering and Technology
            </strong>{' '}
            — Athens, Ohio
          </p>
          <p>
            Bachelor of Science in Computer Science and Certification in Project
            Management
          </p>
          <p>
            <em>Expected Graduation: May 2027</em>
          </p>
          <p>Cumulative GPA: 4.0</p>
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
                Developed full-stack web applications using C++, JavaScript, and
                TypeScript.
              </li>
              <li>
                Designed backend features with Hapi, Joi, and Knex; implemented
                SQL-based data solutions.
              </li>
              <li>
                Enhanced debugging and unit testing using Node Testing and
                improved routing efficiency.
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
                Contributed to software upgrades and front-end development using
                Angular, Git, NPM, and VS Code.
              </li>
              <li>
                Collaborated in agile team meetings to solve technical issues
                and enhance existing systems.
              </li>
              <li>Utilized JIRA for task management and sprint tracking.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Woodridge Local Schools, Technology Intern</h3>
            <p className="job-details">
              <em>May 2021 – June 2023 | Peninsula, Ohio</em>
            </p>
            <ul>
              <li>Diagnosed and repaired over 100 Chromebooks.</li>
              <li>
                Provided tech support for software/network issues across school
                buildings.
              </li>
              <li>Contributed to large-scale tech deployments.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Ohio University, Computer Science Ambassador</h3>
            <p className="job-details">
              <em>March 2025 – Present | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Represented the Russ College through tours, events, and alumni
                engagement.
              </li>
              <li>
                Strengthened public speaking and networking through outreach and
                collaboration.
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
                Led development of Alchemy Artisans VR game for Oculus in Unity
                3D.
              </li>
              <li>
                Implemented crafting, item recognition, and a player-driven
                economy.
              </li>
              <li>Managed a team of 4 through the semester-long project.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Custom Workload Estimator Web App</h3>
            <p className="project-details">
              <em>April 2025 – August 2025 | Athens, Ohio</em>
            </p>
            <ul>
              <li>
                Built with TypeScript and Vite, enabling real-time task
                estimation.
              </li>
              <li>Deployed to GitHub Pages for fast, responsive use.</li>
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
              <strong>Web Dev:</strong> HTML, CSS, Angular, Node.js, SQL, REST
              APIs
            </div>
            <div className="skill-category">
              <strong>Tools:</strong> Git, VS Code, JIRA, NPM, Hapi, Joi, Knex
            </div>
            <div className="skill-category">
              <strong>Engineering:</strong> Agile, Debugging, Troubleshooting,
              Database Design
            </div>
            <div className="skill-category">
              <strong>Professional:</strong> Project Management, Communication,
              Teamwork
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
