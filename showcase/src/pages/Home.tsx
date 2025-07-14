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
        <p>Hello! I'm a web developer passionate about building elegant and functional experiences for the web.</p>
      </div>
      
      <div className="navigation">
        <button type="button" onClick={() => handleNavigation('/skills')}>View Skills</button>
        <button type="button" onClick={() => handleNavigation('/projects')}>View Projects</button>
        <button type="button" onClick={() => handleNavigation('/resume')}>View Resume</button>
      </div>
      
      <div className="bottomBar">
        <a href="https://www.linkedin.com/in/kylie-roenigk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Kroenigk" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Home;
