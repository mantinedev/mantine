import { RocketIcon, GitHubLogoIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/core';

export default [
  {
    to: '/getting-started/',
    label: 'Getting Started',
    theme: DEFAULT_THEME.colors.blue[6],
    icon: RocketIcon,
  },
  { to: '/contribute/', label: 'Contribute', theme: '#000', icon: GitHubLogoIcon },
];
