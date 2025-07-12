export default [
  {
    path: '/',
    component: () => import('./home.html?raw').then(m => m.default),
  },
  {
    path: '/skills',
    component: () => import('./pages/skills/skills.html?raw').then(m => m.default),
  },
  {
    path: '/projects',
    component: () => import('./pages/projects/projects.html?raw').then(m => m.default),
  },
  {
    path: '/resume',
    component: () => import('./pages/resume/resume.html?raw').then(m => m.default),
  }
];
