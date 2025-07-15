import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';
import Sidebar from './sidebar/sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router basename="/Showcase">
      <div className="app-container">
        {/* Fixed Hamburger Button - Always visible */}
        <button 
          className={`hamburger-button ${isSidebarOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Fixed Page Header */}
        <header className="page-header">
          <div className={`header-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <div>
              <h1>Kylie Roenigk</h1>
              <p className="header-subtitle">Computer Science Student | Project Management Certified</p>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        {isSidebarOpen && (
          <>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <Sidebar onClose={closeSidebar} />
          </>
        )}

        {/* Main Content */}
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Fixed Page Footer */}
        <footer className="page-footer">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2024 Kylie Roenigk. All rights reserved.</p>
              <p>Built with React, TypeScript, and Vite</p>
            </div>
            <div className="footer-right">
              <a href="https://www.linkedin.com/in/kylie-roenigk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Kroenigk" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
