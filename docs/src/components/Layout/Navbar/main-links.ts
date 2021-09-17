import { RocketIcon, GitHubLogoIcon, BlendingModeIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/core';

export default [
  {
    to: '/getting-started/',
    label: 'Getting Started',
    theme: DEFAULT_THEME.colors.blue[6],
    icon: RocketIcon,
  },
  {
    to: '/theme-builder/',
    label: 'Theme Builder',
    theme: DEFAULT_THEME.colors.orange[6],
    icon: BlendingModeIcon,
  },
  { to: '/contribute/', label: 'Contribute', theme: '#000', icon: GitHubLogoIcon },
];
