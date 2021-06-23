import { BlendingModeIcon, LightningBoltIcon } from '@modulz/radix-icons';
import { MarkGithubIcon } from '@primer/octicons-react';
import { DEFAULT_THEME } from '@mantine/core';

export const NEXT_STEPS_DATA = [
  {
    title: 'Learn about theming',
    description: 'Change fonts, shadows, colors and many other default properties',
    link: '/theming/theming-context/',
    type: 'gatsby',
    icon: BlendingModeIcon,
    color: DEFAULT_THEME.colors.teal[6],
  },
  {
    title: 'Learn about Styles API',
    description: 'Styles API allows you to add your styles to any part of component',
    link: '/theming/styles-api/',
    type: 'gatsby',
    icon: LightningBoltIcon,
    color: DEFAULT_THEME.colors.pink[6],
  },
  {
    title: 'Explore source code',
    description:
      'Mantine packages and documentation website is open source, if you like Mantine please give us a star',
    link: '/theming/styles-api/',
    type: 'gatsby',
    icon: MarkGithubIcon,
    color: '#000',
  },
];
