import {
  RocketIcon,
  BlendingModeIcon,
  LightningBoltIcon,
  StarIcon,
  GitHubLogoIcon,
} from '@modulz/radix-icons';

export default [
  { to: '/getting-started', label: 'Getting Started', theme: 'pink', icon: RocketIcon },
  { to: '/theming', label: 'Theming', theme: 'indigo', icon: BlendingModeIcon },
  { to: '/integrations', label: 'Integrations and SSR', theme: 'green', icon: LightningBoltIcon },
  { to: '/examples', label: 'Examples', theme: 'orange', icon: StarIcon },
  { to: '/source', label: 'Contribute', theme: 'gray', icon: GitHubLogoIcon },
];
