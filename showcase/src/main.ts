// Import HTML, CSS, and route definitions
import homeHtml from './home.html?raw';
import styles from './style.css?raw';

// Define Web Component
class Showcase extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM setup
    const shadow = this.attachShadow({ mode: 'open' });

    // Inject styles
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);

    // Inject base layout HTML
    const baseLayout = document.createElement('div');
    baseLayout.innerHTML = homeHtml;
    shadow.appendChild(baseLayout);
  }

  connectedCallback() {
  }
}


// Register custom element
customElements.define('showcase-root', Showcase);
