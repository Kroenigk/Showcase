import React from 'react';

import './resume.css';
// Import the PDF file
import resumePDF from '@/KylieRoenigkResumeFall2025.pdf';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Kylie_Roenigk_Resume_Fall_2025.pdf';
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
                Bachelor of Science in Computer Science
                Certificate in Project Management
            </p>
            <p>
                <em>May 2027</em>
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
                <li>Built and maintained full-stack web applications using TypeScript, improving scalability and responsiveness for student-facing tools.</li>
                <li>Designed and implemented backend features with Hapi, Joi, and Knex, delivering structured SQL solutions for reliable data management.</li>
                <li>Enhanced system reliability through unit testing and optimized routing, reducing errors and improving maintainability.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Ohio University (OIT), Software Engineering Intern</h3>
              <p className="job-details">
                <em>April 2025 – August 2025 | Athens, Ohio</em>
              </p>
              <ul>
                <li>Upgraded and maintained production web applications (Angular, Node.js, SQL) actively deployed and used across Ohio University.</li>
                <li>Leveraged Docker, Skaffold, and Kubernetes to containerize, test, and deploy apps on the university’s internal cluster; automated builds and deployments with GitHub Actions CI/CD.</li>
                <li>Designed, developed, and deployed a new customizable web app, improving usability and adoption by faculty and students.</li>
                <li>Restored a critical Docker-based Node.js training project, reviving onboarding for future interns and updating documentation.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Ohio University, Engineering Ambassador (Computer Science)</h3>
              <p className="job-details">
                <em>March 2025 – Present | Athens, Ohio</em>
              </p>
              <ul>
                <li>Represents Russ College of Engineering & Technology by leading tours, promoting programs, and engaging with prospective students, alumni, and donors.</li>
                <li>Strengthened communication and leadership skills through public speaking, outreach, and collaboration with university leadership.</li>
                <li>Nominated by Faculty and selected by a panel of Engineering Ambassadors.</li>
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
                <li>Led development of Alchemy Artisans, a Unity 3D VR game for Oculus featuring object interaction and a handwritten crafting system.</li>
                <li>Implemented a tag-based item recognition system, automatic item respawns, and a player-driven crafting economy, enabling users to fulfill customer requests and earn in-game currency for shop purchases.</li>
                <li>Coordinated a team of four throughout a semester-long project, delivering a fully integrated and showcased VR experience.</li>
              </ul>
            </div>
            <div className="project-item">
              <h3>Workload Estimator for Ohio University, Lead Developer</h3>
              <p className="project-details">
                <em>April 2025 – August 2025 | Athens, Ohio</em>
              </p>
              <ul>
                <li>Developed a responsive Custom Workload Estimator using TypeScript and Vite, allowing users to input tasks, customize categories, and calculate time commitments in real-time.</li>
                <li>Deployed the app on GitHub Pages with a fast, single-page architecture optimized for usability and cross-device access.</li>
                <li>Bundled the project and published it as a reusable library, extending functionality beyond the web app.</li>
              </ul>
            </div>
            <div className="project-item">
              <h3>Personal Portfolio & AI Developer Tools, Independent Developer</h3>
              <p className="project-details">
                <em>July 2025 – Present</em>
              </p>
              <ul>
                <li>Built and deployed a full-stack portfolio site (React, TypeScript, Vite, Render, GitHub Actions) with clean, automated builds (ESLint/Prettier).</li>
                <li>Integrated a custom AI chatbot (OpenAI, Express, Node-Fetch, CORS, Dotenv) that answers questions about my skills, projects, and experience, creating an interactive resume experience.</li>
                <li>Developed two specialized AI reviewer modes — CSS Reviewer (detects redundancies, suggests styling improvements) and Code Reviewer (offers optimization guidance), boosting developer productivity and code quality.</li>
              </ul>
            </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <strong>Languages:</strong> C/C++, Java, JavaScript, Python, TypeScript, C#, SQL/SQLite
              </div>
              <div className="skill-category">
                <strong>Front-end:</strong> React, Angular, HTML/CSS, Vite, Tailwind
              </div>
              <div className="skill-category">
                <strong>Back-end:</strong> Node.js, Express, Hapi, Joi, Knex, REST APIs
              </div>
              <div className="skill-category">
                <strong>DevOps & Tools:</strong> Docker, Skaffold, Kubernetes, Render (Cloud Hosting), Git/GitHub, GitHub Actions (CI/CD), JIRA, NPM, VS Code
              </div>
              <div className="skill-category">
                <strong>AI & Data:</strong> OpenAI API, AI chatbot development, SQL optimization
              </div>
              <div className="skill-category">
                <strong>Other:</strong> Unity3D, Oculus SDK, Agile Development, Unit & Integration Testing (Jest/Node.js), Database Design
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
