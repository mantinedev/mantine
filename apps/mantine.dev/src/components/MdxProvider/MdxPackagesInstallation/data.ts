export const PACKAGES_DATA = [
  {
    package: '@mantine/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@mantine/hooks'],
  },
  {
    package: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@mantine/hooks', '@mantine/core'],
  },
  {
    package: '@mantine/form',
    description: 'Form management library',
    dependencies: ['@mantine/form'],
  },
  {
    package: '@mantine/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/dates', 'dayjs'],
  },
  {
    package: '@mantine/charts',
    description: 'Recharts based charts library',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/charts', 'recharts@2'],
  },
  {
    package: '@mantine/notifications',
    description: 'Notifications system',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/notifications'],
  },
  {
    package: '@mantine/code-highlight',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/code-highlight'],
  },
  {
    package: '@mantine/tiptap',
    description: 'Rich text editor based on Tiptap',
    dependencies: [
      '@mantine/hooks',
      '@mantine/core',
      '@mantine/tiptap',
      '@tiptap/pm',
      '@tiptap/react',
      '@tiptap/extension-link',
      '@tiptap/starter-kit',
    ],
  },
  {
    package: '@mantine/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/dropzone'],
  },
  {
    package: '@mantine/carousel',
    description: 'Embla based carousel component',
    dependencies: [
      '@mantine/hooks',
      '@mantine/core',
      '@mantine/carousel',
      'embla-carousel-react@^7.1.0',
    ],
  },
  {
    package: '@mantine/spotlight',
    description: 'Overlay command center',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/spotlight'],
  },
  {
    package: '@mantine/modals',
    description: 'Centralized modals manager',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/modals'],
  },
  {
    package: '@mantine/nprogress',
    description: 'Navigation progress',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/nprogress'],
  },
];
