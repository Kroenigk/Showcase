import angularIcon from '@/icons/technologies/angular.svg';
import dockerIcon from '@/icons/technologies/docker.svg';
import eslintIcon from '@/icons/technologies/eslint.svg';
import expressjsIcon from '@/icons/technologies/express.svg';
import gitIcon from '@/icons/technologies/git.svg';
import githubIcon from '@/icons/technologies/github.svg';
import githubActionsIcon from '@/icons/technologies/github_actions.svg';
import jestIcon from '@/icons/technologies/jest.svg';
import nodejsIcon from '@/icons/technologies/nodejs.svg';
import reactIcon from '@/icons/technologies/react.svg';
import sqliteIcon from '@/icons/technologies/sqlite.svg';
import vitejsIcon from '@/icons/technologies/vitejs.svg';

export interface Technology {
  name: string;
  id: string;
  icon: string;
  link: string;
}

export const technologies: Technology[] = [
  {
    name: 'GitHub',
    id: 'github',
    icon: githubIcon,
    link: 'https://github.com/',
  },
  {
    name: 'GitHub Actions',
    id: 'github-actions',
    icon: githubActionsIcon,
    link: 'https://github.com/features/actions',
  },
  {
    name: 'Node.js',
    id: 'nodejs',
    icon: nodejsIcon,
    link: 'https://nodejs.org/',
  },
  {
    name: 'Docker',
    id: 'docker',
    icon: dockerIcon,
    link: 'https://www.docker.com/',
  },
  {
    name: 'React',
    id: 'react',
    icon: reactIcon,
    link: 'https://react.dev/',
  },
  {
    name: 'Vite.js',
    id: 'vitejs',
    icon: vitejsIcon,
    link: 'https://vite.dev/',
  },
  {
    name: 'Jest',
    id: 'jest',
    icon: jestIcon,
    link: 'https://jestjs.io/',
  },
  {
    name: 'ESLint',
    id: 'eslint',
    icon: eslintIcon,
    link: 'https://eslint.org/',
  },
  {
    name: 'SQLite',
    id: 'sqlite',
    icon: sqliteIcon,
    link: 'https://sqlite.org/',
  },
  {
    name: 'Express.js',
    id: 'expressjs',
    icon: expressjsIcon,
    link: 'https://expressjs.com/',
  },
  {
    name: 'Git',
    id: 'git',
    icon: gitIcon,
    link: 'https://git-scm.com',
  },
  {
    name: 'Angular',
    id: 'angular',
    icon: angularIcon,
    link: 'https://angular.dev/',
  },
];

// Get a subset of technologies for the rotating banner (first 10)
export const getFeaturedTechnologies = (count: number = 10): Technology[] => {
  return technologies.slice(0, count);
};

// Get technology by ID
export const getTechnologyById = (id: string): Technology | undefined => {
  return technologies.find(tech => tech.id === id);
};
