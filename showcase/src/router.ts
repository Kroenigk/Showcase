const routes = [
  {
    path: '/',
    layout: 'home',
    component: () => import('./home.html?raw').then(m => m.default),
  },
  {
    path: '/skills',
    layout: 'main',
    component: () => import('./pages/skills/skills.html?raw').then(m => m.default),
  },
  {
    path: '/projects',
    layout: 'main',
    component: () => import('./pages/projects/projects.html?raw').then(m => m.default),
  },
  {
    path: '/resume',
    layout: 'main',
    component: () => import('./pages/resume/resume.html?raw').then(m => m.default),
  },
  {
    path:'/sidebar',
    layout: 'main',
    component: () => import('./sidebar/sidebar.html?raw').then(m => m.default),
  }
];

export default routes;
