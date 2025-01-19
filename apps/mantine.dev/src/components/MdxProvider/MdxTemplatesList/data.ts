export interface Template {
  name: string;
  link: string;
  description: string;
  type: 'next' | 'gatsby' | 'vite' | 'redwood' | 'react-router';
}

export const TEMPLATES_DATA: Template[] = [
  {
    type: 'next',
    name: 'next-app-template',
    link: 'https://github.com/mantinedev/next-app-template',
    description: 'Next.js template with app router and full setup: Jest, Storybook, ESLint',
  },
  {
    type: 'next',
    name: 'next-pages-template',
    link: 'https://github.com/mantinedev/next-pages-template',
    description: 'Next.js template with pages router and full setup: Jest, Storybook, ESLint',
  },
  {
    type: 'next',
    name: 'next-app-min-template',
    link: 'https://github.com/mantinedev/next-app-min-template',
    description:
      'Next.js template with app router and minimal setup – no additional tools included, only default Next.js configuration',
  },
  {
    type: 'next',
    name: 'next-pages-min-template',
    link: 'https://github.com/mantinedev/next-pages-min-template',
    description:
      'Next.js template with pages router and minimal setup – no additional tools included, only default Next.js configuration',
  },
  {
    type: 'next',
    name: 'next-vanilla-extract-template',
    link: 'https://github.com/mantinedev/next-vanilla-extract-template',
    description: 'Next.js template with Vanilla extract example',
  },
  {
    type: 'vite',
    name: 'vite-template',
    link: 'https://github.com/mantinedev/vite-template',
    description: 'Vite template with full setup: Vitest, Prettier, Storybook, ESLint',
  },
  {
    type: 'vite',
    name: 'vite-min-template',
    link: 'https://github.com/mantinedev/vite-min-template',
    description:
      'Vite template with minimal setup – no additional tools included, only default Vite configuration',
  },
  {
    type: 'vite',
    name: 'vite-vanilla-extract-template',
    link: 'https://github.com/mantinedev/vite-vanilla-extract-template',
    description: 'Vite template with Vanilla extract example',
  },
  {
    type: 'gatsby',
    name: 'gatsby-template',
    link: 'https://github.com/mantinedev/gatsby-template',
    description: 'Gatsby template with basic setup',
  },
  {
    type: 'redwood',
    name: 'redwood-template',
    link: 'https://github.com/mantinedev/redwood-template',
    description: 'RedwoodJS template with basic setup',
  },
];
