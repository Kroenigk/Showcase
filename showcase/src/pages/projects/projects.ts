import projectsStyles from './projects.css?raw';
import projectsHtml from './projects.html?raw';

// Define Web Component for Projects
// This component will display a list of projects with their details
class Projects extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM setup
    const shadow = this.attachShadow({ mode: 'open' });

    // Inject styles
    const styleElement = document.createElement('style');
    styleElement.textContent = projectsStyles;
    shadow.appendChild(styleElement);

    // Inject HTML
    const contentElement = document.createElement('div');
    contentElement.innerHTML = projectsHtml;
    shadow.appendChild(contentElement);
  }
}
customElements.define('my-projects', Projects);
