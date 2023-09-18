import { Frontmatter } from '@/types';

export const MDX_OTHERS_DATA: Record<string, Frontmatter> = {
  Notifications: {
    title: 'Notifications system',
    package: '@mantine/notifications',
    slug: '/others/notifications',
    props: ['Notifications'],
    styles: ['Notifications'],
    description: 'Mantine notifications system',
    source: 'mantine-notifications/src',
    license: 'MIT',
    docs: 'others/notifications.mdx',
  },

  Spotlight: {
    title: 'Spotlight',
    package: '@mantine/spotlight',
    slug: '/others/spotlight',
    props: [
      'Spotlight',
      'SpotlightRoot',
      'SpotlightAction',
      'SpotlightActionsGroup',
      'SpotlightSearch',
    ],
    styles: ['Spotlight'],
    description: 'Command center for your application',
    source: 'mantine-spotlight/src',
    license: 'MIT',
    docs: 'others/spotlight.mdx',
  },

  Carousel: {
    title: 'Carousel',
    package: '@mantine/carousel',
    slug: '/others/carousel',
    props: ['Carousel'],
    styles: ['Carousel'],
    description: 'Embla based carousel component',
    source: 'mantine-carousel/src',
    license: 'MIT',
    docs: 'others/carousel.mdx',
  },

  Dropzone: {
    title: 'Dropzone',
    package: '@mantine/dropzone',
    slug: '/others/dropzone',
    props: ['Dropzone'],
    styles: ['Dropzone'],
    description: 'Capture files from user with drag and drop',
    source: 'mantine-dropzone/src',
    license: 'MIT',
    docs: 'others/dropzone.mdx',
  },

  Nprogress: {
    title: 'NavigationProgress',
    package: '@mantine/nprogress',
    slug: '/others/nprogress',
    props: ['NavigationProgress'],
    description: 'Navigation progress bar',
    source: 'mantine-nprogress/src',
    license: 'MIT',
    docs: 'others/nprogress.mdx',
  },

  CodeHighlight: {
    title: 'CodeHighlight',
    package: '@mantine/code-highlight',
    slug: '/others/code-highlight',
    props: ['CodeHighlight', 'CodeHighlightTabs', 'InlineCodeHighlight'],
    styles: ['CodeHighlight', 'CodeHighlightTabs', 'InlineCodeHighlight'],
    description: 'Highlight code with highlight.js',
    source: 'mantine-code-highlight/src',
    license: 'MIT',
    docs: 'others/code-highlight.mdx',
  },

  Modals: {
    title: 'Modals manager',
    package: '@mantine/modals',
    slug: '/others/modals',
    props: ['ModalsProvider'],
    description: 'Centralized modals manager with option to handle state of multi-step modals',
    source: 'mantine-modals/src',
    license: 'MIT',
    docs: 'others/modals.mdx',
  },

  TipTap: {
    title: 'Rich text editor',
    package: '@mantine/tiptap',
    slug: '/others/tiptap',
    props: ['RichTextEditor'],
    styles: ['RichTextEditor'],
    description: 'Tiptap based rich text editor',
    source: 'mantine-tiptap/src',
    license: 'MIT',
    docs: 'others/tiptap.mdx',
  },
};
