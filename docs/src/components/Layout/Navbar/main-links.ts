import {
  RocketIcon,
  BlendingModeIcon,
  LightningBoltIcon,
  StarIcon,
  GitHubLogoIcon,
} from '@modulz/radix-icons';

export default [
  { to: '/pages/getting-started/', label: 'Getting Started', theme: 'red', icon: RocketIcon },
  { to: '/pages/theming/', label: 'Theming', theme: 'indigo', icon: BlendingModeIcon },
  {
    to: '/pages/integrations/',
    label: 'Integrations and SSR',
    theme: 'green',
    icon: LightningBoltIcon,
  },
  { to: '/pages/examples/', label: 'Examples', theme: 'orange', icon: StarIcon },
  { to: '/pages/contribute/', label: 'Contribute', theme: 'gray', icon: GitHubLogoIcon },
];
