import React from 'react';
import { DEFAULT_THEME } from '@mantine/core';
import { IconCode, IconStar, IconRocket } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

export default [
  {
    to: '/pages/getting-started/',
    label: 'Getting started',
    color: DEFAULT_THEME.colors.blue[5],
    icon: IconRocket,
  },
  {
    to: '/pages/basics/',
    label: 'Learn the basics',
    color: DEFAULT_THEME.colors.violet[5],
    icon: IconStar,
  },
  {
    to: '/pages/about/',
    label: 'About Mantine',
    color: DEFAULT_THEME.colors.indigo[5],
    icon: (props: any) => <MantineLogo type="mark" {...props} />,
    rawIcon: true,
  },
  {
    to: 'https://ui.mantine.dev/',
    label: 'Mantine UI',
    color: DEFAULT_THEME.colors.cyan[5],
    icon: (props: any) => <MantineLogo type="mark" variant="ui.mantine.dev" {...props} />,
    rawIcon: true,
  },
  { to: '/pages/contributing/', label: 'Contribute', color: '#000', icon: IconCode },
];
