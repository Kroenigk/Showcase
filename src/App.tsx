import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';
import Sidebar from './sidebar/sidebar';
import Assistant from './assistant/assistant';
import About from './pages/About/about';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router basename="/Showcase">
      <div className="app-container">
        <button
          className={`hamburger-button ${isSidebarOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <header className="page-header">
          <div
            className={`header-content ${isSidebarOpen ? 'sidebar-open' : ''}`}
          >
            <div>
              <h1>Kylie Roenigk</h1>
              <p className="header-subtitle">
                Computer Science Student | Software Engineering Intern
              </p>
            </div>

            {/* Chat Assistant in Header */}
            <div className="header-chat">
              <Assistant isOpen={isChatOpen} onToggle={toggleChat} />
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
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Page Footer */}
        <footer className="page-footer">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2024 Kylie Roenigk. All rights reserved.</p>
              <p>Built with React, TypeScript, and Vite</p>
            </div>
            <div className="footer-right">
              <a
                href="https://www.linkedin.com/in/kylie-roenigk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Kroenigk"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
