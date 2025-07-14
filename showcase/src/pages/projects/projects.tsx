import { Link } from 'react-router-dom';
import './projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projectsPage">
      <div className="topBar">
        <h1>My Projects</h1>
      </div>

      <div className="projectsContent">
        <div className="projectCard">
          <h2>Workload Estimator</h2>
          <p>A dynamic tool to calculate estimated academic workload using Angular and SQLite.</p>
        </div>
        <div className="projectCard">
          <h2>Alchemy Artisans (VR Game)</h2>
          <p>Unity-based VR crafting game with Oculus integration and hand gesture recognition.</p>
        </div>
      </div>

      <div className="navigation">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/skills">
          <button>View Skills</button>
        </Link>
        <Link to="/resume">
          <button>View Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
