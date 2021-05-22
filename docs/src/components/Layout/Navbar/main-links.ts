import {
  RocketIcon,
  BlendingModeIcon,
  StarIcon,
  GitHubLogoIcon,
  ArchiveIcon,
} from '@modulz/radix-icons';

export default [
  { to: '/', label: 'Getting Started', theme: 'violet', icon: RocketIcon },
  { to: '/pages/theming/', label: 'Theming', theme: 'pink', icon: BlendingModeIcon },
  { to: '/pages/examples/', label: 'Examples', theme: 'green', icon: StarIcon },
  { to: '/pages/changelog/', label: 'Changelog', theme: 'blue', icon: ArchiveIcon },
  { to: '/pages/contribute/', label: 'Contribute', theme: 'gray', icon: GitHubLogoIcon },
];
