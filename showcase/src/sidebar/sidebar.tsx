import { useNavigate } from 'react-router-dom';
import '../style.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <button onClick={() => handleNavigation('/')}>Home</button>
        <button onClick={() => handleNavigation('/skills')}>Skills</button>
        <button onClick={() => handleNavigation('/projects')}>Projects</button>
        <button onClick={() => handleNavigation('/resume')}>Resume</button>
      </ul>
    </div>
  );
};

export default Sidebar;
