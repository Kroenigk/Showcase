import './skills.css';

const Skills: React.FC = () => {
  return (
    <div className="skillsPage">
      <div className="topBar">
        <h1>My Skills</h1>
      </div>

      <div className="skillsContent">
        <ul>
          <li>TypeScript / JavaScript</li>
          <li>Angular / Vite</li>
          <li>HTML / CSS / Web Components</li>
          <li>Git / GitHub Actions / CI-CD</li>
          <li>Python / C++ / C#</li>
          <li>Project Management (Certified)</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
