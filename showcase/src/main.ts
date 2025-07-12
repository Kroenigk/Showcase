// Import HTML, CSS, and route definitions
import homeHtml from './home.html?raw';
import styles from './style.css?raw';
import routes from './router';
import sidebarHtml from './sidebar/sidebar.html?raw';

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
    // Inject sidebar into app root (in light DOM)
    const appRoot = document.getElementById('app')!;
    appRoot.innerHTML = sidebarHtml;

    // Add dynamic route view container
    const contentRoot = document.createElement('div');
    contentRoot.id = 'page';
    appRoot.appendChild(contentRoot);

    // Handle link clicks in sidebar
    appRoot.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.target as HTMLAnchorElement).getAttribute('href');
        if (href) {
          history.pushState({}, '', href);
          navigateTo(href);
        }
      });
    });

    // Route handler
    function navigateTo(path: string) {
      const route = routes.find(r => r.path === path);
      if (route) {
        route.component().then(html => {
          contentRoot.innerHTML = html;
        });
      } else {
        contentRoot.innerHTML = '<p>404 – Page Not Found</p>';
      }
    }

    // Initial load
    navigateTo(location.pathname);

    // Handle browser navigation
    window.onpopstate = () => {
      navigateTo(location.pathname);
    };
  }
}

// Register custom element
customElements.define('showcase-root', Showcase);
