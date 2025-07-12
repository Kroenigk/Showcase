export default [
  {
    path: '/',
    component: () => import('./home.html?raw'),
  },
  {
    path: '/skills',
    component: () => import('./pages/skills/skills.html?raw'),
  },
  {
    path: '/projects',
    component: () => import('./pages/projects/projects.html?raw'),
  },
  {
    path: '/resume',
    component: () => import('./pages/resume/resume.html?raw'),
  },
];
