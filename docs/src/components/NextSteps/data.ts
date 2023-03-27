import { IconStar, IconPalette, IconCode } from '@tabler/icons-react';

export const NEXT_STEPS_DATA = [
  {
    title: 'Learn the basics',
    description:
      'Read a 5 minute tutorial to get an overview of all core features, please start your journey with Mantine here',
    link: '/pages/basics/',
    type: 'gatsby',
    icon: IconStar,
    color: 'violet',
  },
  {
    title: 'Learn about theming',
    description:
      'Learn how to change colors, fonts, shadows, spacing and other theme values with MantineProvider',
    link: '/theming/mantine-provider/',
    type: 'gatsby',
    icon: IconPalette,
    color: 'pink',
  },
  {
    title: 'Explore source code',
    description:
      'Mantine packages and documentation website is open source, if you like Mantine please give us a star',
    link: 'https://github.com/mantinedev/mantine',
    type: 'link',
    icon: IconCode,
    color: '#000',
  },
];
