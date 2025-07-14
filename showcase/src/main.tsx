import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import other components
import './pages/projects/projects';
import './pages/resume/resume';
import './sidebar/sidebar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
