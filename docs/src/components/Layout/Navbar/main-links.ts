import {
  RocketIcon,
  BlendingModeIcon,
  StarIcon,
  GitHubLogoIcon,
  LightningBoltIcon,
} from '@modulz/radix-icons';

export default [
  { to: '/', label: 'Getting Started', theme: 'red', icon: RocketIcon },
  { to: '/pages/theming/', label: 'Theming', theme: 'indigo', icon: BlendingModeIcon },
  { to: '/pages/examples/', label: 'Examples', theme: 'green', icon: StarIcon },
  { to: '/pages/architecture/', label: 'Architecture', theme: 'orange', icon: LightningBoltIcon },
  { to: '/pages/contribute/', label: 'Contribute', theme: 'gray', icon: GitHubLogoIcon },
];
