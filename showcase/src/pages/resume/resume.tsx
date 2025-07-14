import './resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Your Full Name</h1>
        <div className="title">Full-Stack Developer | Software Engineer</div>
        <div className="contact-info">
          <span>📧 your.email@example.com</span>
          <span>📱 (555) 123-4567</span>
          <a href="https://linkedin.com/in/yourprofile">🔗 LinkedIn</a>
          <a href="https://github.com/yourusername">💻 GitHub</a>
          <span>📍 Your City, State</span>
        </div>
      </header>

      <section className="section">
        <h2>Professional Summary</h2>
        <p>
          Passionate and results-driven software developer with X+ years of experience in full-stack development. 
          Expertise in modern web technologies including React, TypeScript, Node.js, and cloud platforms. 
          Strong problem-solving skills and a commitment to writing clean, maintainable code.
        </p>
      </section>
    </div>
  );
};

export default Resume;
