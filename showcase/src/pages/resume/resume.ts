import resumeStyles from './resume.css?raw';
import resumeHtml from './resume.html?raw';

class Resume extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Inject styles
    const styleElement = document.createElement('style');
    styleElement.textContent = resumeStyles;
    this.shadowRoot?.appendChild(styleElement);
    
    // Inject resume HTML
    const resumeContainer = document.createElement('div');
    resumeContainer.innerHTML = resumeHtml;
    this.shadowRoot?.appendChild(resumeContainer);
  }

  connectedCallback() {
  }

}

customElements.define('my-resume', Resume);
