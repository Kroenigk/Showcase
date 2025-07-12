import sideBarStyles from './sidebar.css?raw';
import sidebarHtml from './sidebar/sidebar.html?raw';

class sidebar extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM setup
    const shadow = this.attachShadow({ mode: 'open' }); 

    // Inject styles
    const styleElement = document.createElement('style');
    styleElement.textContent = sideBarStyles;
    shadow.appendChild(styleElement);

    // Inject sidebar HTML
    const sidebarContainer = document.createElement('div');
    sidebarContainer.innerHTML = sidebarHtml;
    shadow.appendChild(sidebarContainer);
  }
    connectedCallback() {
        // Handle sidebar toggle
        const toggleButton = this.shadowRoot?.getElementById('toggle-sidebar');
        const sidebarNav = this.shadowRoot?.querySelector('nav');
    
        if (toggleButton && sidebarNav) {
        toggleButton.addEventListener('click', () => {
            sidebarNav.classList.toggle('active');
        });
        }
    
        // Handle link clicks in sidebar
        this.shadowRoot?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = (e.target as HTMLAnchorElement).getAttribute('href');
            if (href) {
            history.pushState({}, '', href);
            const event = new CustomEvent('navigate', { detail: { path: href } });
            this.dispatchEvent(event);
            }
        });
        });
    }
}
customElements.define('app-sidebar', sidebar);
