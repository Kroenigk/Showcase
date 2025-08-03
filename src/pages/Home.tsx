import { useNavigate } from 'react-router-dom';
import '../style.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="homePage">
      <div className="topBar">
        <h1>Welcome to My Showcase</h1>
      </div>

      <div className="aboutMe">
        <p>
          Hi, I’m Kylie — a Computer Science student building clean, intuitive
          software. This showcase highlights my technical skills, projects, and
          creative problem-solving in action.
        </p>
      </div>

      <div className="navigation">
        <button type="button" onClick={() => handleNavigation('/skills')}>
          View Skills
        </button>
        <button type="button" onClick={() => handleNavigation('/projects')}>
          View Projects
        </button>
        <button type="button" onClick={() => handleNavigation('/resume')}>
          View Resume
        </button>
        <button type="button" onClick={() => handleNavigation('/about')}>
          About Me
        </button>
      </div>
    </div>
  );
};

export default Home;
