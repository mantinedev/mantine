import { Frontmatter } from '@/types';

export const MDX_GUIDES_DATA: Record<string, Frontmatter> = {
  Polymorphic: {
    title: 'Polymorphic components',
    slug: '/guides/polymorphic',
    search: 'createPolymorphicComponent, change root element, component prop',
    hideHeader: true,
  },

  NextJs: {
    title: 'Usage with Next.js',
    slug: '/guides/next',
    search: 'Get started with Next.js',
    hideHeader: true,
  },

  Vite: {
    title: 'Usage with Vite',
    slug: '/guides/vite',
    search: 'Get started with Vite',
    hideHeader: true,
  },

  Remix: {
    title: 'Usage with Remix',
    slug: '/guides/remix',
    search: 'Get started with Remix',
    hideInSearch: true,
    hideHeader: true,
  },

  ReactRouter: {
    title: 'Usage with React Router',
    slug: '/guides/react-router',
    search: 'Get started with React Router',
    hideHeader: true,
  },

  Gatsby: {
    title: 'Usage with Gatsby',
    slug: '/guides/gatsby',
    search: 'Get started with Gatsby',
    hideHeader: true,
  },

  Redwood: {
    title: 'Usage with Redwood',
    slug: '/guides/redwood',
    search: 'Get started with Redwood',
    hideHeader: true,
  },

  Storybook: {
    title: 'Usage with Storybook',
    slug: '/guides/storybook',
    search: 'Setup Mantine with Storybook',
    hideHeader: true,
  },

  TypeScript: {
    title: 'Usage with TypeScript',
    slug: '/guides/typescript',
    search: 'Usage with TypeScript',
    hideHeader: true,
  },

  JavaScript: {
    title: 'Usage with JavaScript',
    slug: '/guides/javascript',
    search: 'Usage with JavaScript',
    hideHeader: true,
  },

  Icons: {
    title: 'Icons libraries',
    slug: '/guides/icons',
    search: 'Usage of icons libraries with Mantine',
    hideHeader: true,
  },

  Jest: {
    title: 'Testing with Jest',
    slug: '/guides/jest',
    search: 'Testing with Jest and React Testing Library',
    hideHeader: true,
  },

  Vitest: {
    title: 'Testing with Vitest',
    slug: '/guides/vitest',
    search: 'Testing with Vitest and React Testing Library',
    hideHeader: true,
  },

  SixToSeven: {
    title: '6.x to 7.x migration',
    slug: '/guides/6x-to-7x',
    search: 'Styles migration guide from 6.x to 7.x',
    hideHeader: true,
  },

  FunctionsReference: {
    title: 'Functions reference',
    slug: '/guides/functions-reference',
    search:
      'A list of functions exported from Mantine packages that are not documented anywhere else',
    hideHeader: true,
  },
};
