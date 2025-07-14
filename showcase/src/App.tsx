import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';
import Sidebar from './sidebar/sidebar';

function App() {
  return (
    <Router basename="/Showcase/showcase">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
