import { Frontmatter } from '@/types';

export const MDX_META_DATA: Record<string, Frontmatter> = {
  NotFound: {
    title: '404',
    slug: '/404',
    hideHeader: true,
    hideInSearch: true,
    hideSiblings: true,
  },

  About: {
    title: 'About Mantine',
    slug: '/about',
    search: 'Browser support, releases cycle, previous versions documentation',
    hideSiblings: true,
    hideHeader: true,
  },

  GettingStarted: {
    title: 'Getting started',
    slug: '/getting-started',
    hideInSearch: true,
    hideSiblings: true,
    hideHeader: true,
  },

  TemplatesUsage: {
    title: 'Getting started with a template',
    slug: '/templates-usage',
    hideInSearch: true,
    hideSiblings: true,
    hideHeader: true,
  },

  Overview: {
    title: 'Mantine API overview',
    slug: '/overview',
    search: 'Overview of Mantine components API',
    hideSiblings: true,
    hideHeader: true,
  },

  Contribute: {
    title: 'Contributing to Mantine',
    slug: '/contribute',
    search: 'Learn how to contribute to Mantine',
    hideSiblings: true,
    hideHeader: true,
  },

  Changelog700: {
    title: 'Version v7.0.0',
    slug: '/changelog/7-0-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/7.0.0',
    date: 'September 18th, 2023',
  },

  PreviousChangelogs: {
    title: 'Previous versions',
    slug: '/changelog/previous-versions',
    hideHeader: true,
  },
};
