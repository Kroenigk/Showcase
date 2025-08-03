import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="sidebar open">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li>
            <button onClick={() => handleNavigation('/')}>🏠 Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/skills')}>
              💡 Skills
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/projects')}>
              🚀 Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/resume')}>
              📄 Resume
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/about')}>
              👤 About Me
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
