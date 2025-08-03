import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <div className="aboutPage">
      <div className="topBar">
        <h1>About Me</h1>
      </div>

      <div className="aboutContent">
        <div className="intro-section">
          <div className="profile-card">
            <div className="profile-text">
              <h2>Hi, I'm Kylie! </h2>
              <p>
                I'm a Computer Science student at Ohio University with a passion
                for creating elegant, functional software solutions. Currently
                serving as a Software Engineering Intern at Ohio University's
                Office of Information Technology, I love tackling complex
                problems and building tools that make a real difference.
              </p>
            </div>
          </div>
        </div>

        <div className="sections-grid">
          <div className="about-section">
            <h3>🎓 Academic Journey</h3>
            <div className="section-content">
              <p>
                Pursuing my Bachelor of Science in Computer Science at Ohio
                University's Russ College of Engineering and Technology, where I
                maintain a 4.0 GPA. I'm also working toward certification in
                Project Management, combining technical expertise with
                leadership skills.
              </p>
              <div className="highlight-item">
                <strong>Expected Graduation:</strong> May 2027
              </div>
              <div className="highlight-item">
                <strong>Current Role:</strong> Computer Science Student
                Ambassador (2025-2026)
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3>💼 Professional Experience</h3>
            <div className="section-content">
              <p>
                My internship at Ohio University's Office of Information
                Technology has been an incredible learning experience, where I
                work on enterprise-level applications that serve the university
                community. I specialize in full-stack development, working with
                modern technologies like TypeScript, React, Angular, and
                Node.js.
              </p>
              <div className="tech-highlights">
                <span className="tech-item">Full-Stack Development</span>
                <span className="tech-item">API Design</span>
                <span className="tech-item">Database Optimization</span>
                <span className="tech-item">VR Development</span>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3>🚀 What Drives Me</h3>
            <div className="section-content">
              <p>
                I'm passionate about leveraging technology to solve real-world
                problems. Whether it's developing a VR crafting game, building
                academic planning tools, or optimizing university systems, I
                approach each project with curiosity and dedication.
              </p>
              <ul className="values-list">
                <li>Continuous learning and self-improvement</li>
                <li>Collaborative problem-solving</li>
                <li>Clean, maintainable code</li>
                <li>User-centered design</li>
              </ul>
            </div>
          </div>

          <div className="about-section">
            <h3>🌍 Beyond Coding</h3>
            <div className="section-content">
              <p>
                When I'm not coding, I enjoy exploring new technologies, trying
                new recipes, and reading various genres of literature. I believe
                in work-life balance and the importance of cross-cultural
                collaboration in our increasingly connected world.
              </p>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-icon">🎯</span>
                  <span>Project Management</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🤝</span>
                  <span>Team Leadership</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🌐</span>
                  <span>International Tech</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">📚</span>
                  <span>Continuous Learning</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎨</span>
                  <span>Creative Problem-Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="goals-section">
          <h3>🎯 Future Goals</h3>
          <div className="goals-content">
            <p>
              I'm excited about the future of technology and my role in shaping
              it. My long-term vision includes working internationally in the
              tech sector after getting my Master's in Data Science and Machine
              Learning, contributing to cutting-edge research in ML/AI, and
              designing impactful tools with global relevance.
            </p>
            <div className="goals-grid">
              <div className="goal-item">
                <h4>Short-term</h4>
                <ul>
                  <li>Complete my Computer Science degree with distinction</li>
                  <li>Gain expertise in machine learning and AI</li>
                  <li>Lead more collaborative development projects</li>
                </ul>
              </div>
              <div className="goal-item">
                <h4>Long-term</h4>
                <ul>
                  <li>
                    Obtain a Master's in Data Science and Machine Learning
                  </li>
                  <li>Work internationally in technology innovation</li>
                  <li>Contribute to impactful open-source projects</li>
                  <li>Bridge technology and ethical applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="connect-section">
          <h3>📬 Let's Connect!</h3>
          <p>
            I'm always excited to connect with fellow developers, potential
            collaborators, or anyone interested in technology. Feel free to
            reach out!
          </p>
          <div className="connect-links">
            <a
              href="https://www.linkedin.com/in/kylie-roenigk/"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn linkedin"
            >
              <span className="btn-icon">💼</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/Kroenigk"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn github"
            >
              <span className="btn-icon">⚡</span>
              GitHub
            </a>
            <a
              href="mailto:kylieroenigk@gmail.com"
              className="connect-btn email"
            >
              <span className="btn-icon">📧</span>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
