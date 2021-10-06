import { RocketIcon, GitHubLogoIcon, /* BlendingModeIcon, */ StarIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/core';

export default [
  {
    to: '/getting-started/',
    label: 'Getting Started',
    theme: DEFAULT_THEME.colors.blue[6],
    icon: RocketIcon,
  },
  {
    to: '/pages/basics/',
    label: 'Learn the Basics',
    theme: DEFAULT_THEME.colors.violet[6],
    icon: StarIcon,
  },
  // {
  //   to: '/theme-builder/',
  //   label: 'Theme Builder',
  //   theme: DEFAULT_THEME.colors.pink[6],
  //   icon: BlendingModeIcon,
  // },
  { to: '/pages/contributing/', label: 'Contribute', theme: '#000', icon: GitHubLogoIcon },
];
