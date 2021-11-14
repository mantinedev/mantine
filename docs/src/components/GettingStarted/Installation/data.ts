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
    package: '@mantine/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/dates', 'dayjs'],
  },
  {
    package: '@mantine/notifications',
    description: 'Notifications system',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/notifications'],
  },
  {
    package: '@mantine/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/prism'],
  },
  {
    package: '@mantine/rte',
    description: 'Rich text editor based on Quill.js',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/rte'],
  },
  {
    package: '@mantine/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/dropzone'],
  },
  {
    package: '@mantine/modals',
    description: 'Centralized modals manager',
    dependencies: ['@mantine/hooks', '@mantine/core', '@mantine/modals'],
  },
];
