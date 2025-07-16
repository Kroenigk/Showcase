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
          Hi, I’m Kylie — a Computer Science student with a passion for crafting
          clean, intuitive digital experiences. This showcase highlights the
          skills and projects I’ve built along the way
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
      </div>
    </div>
  );
};

export default Home;
