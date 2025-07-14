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
    <Router basename="/Showcase/showcase">
      <div className="app-container">
        {/* Hamburger Menu Button */}
        <button 
          className="hamburger-button" 
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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
      </div>
    </Router>
  );
}

export default App;
