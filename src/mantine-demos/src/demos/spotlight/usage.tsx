import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

const code = `
import { Button, Group } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';
import { Home, Dashboard, FileText, Search } from 'tabler-icons-react';

function SpotlightControl() {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>Open spotlight</Button>
    </Group>
  );
}

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <Home size={18} />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <Dashboard size={18} />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <FileText size={18} />,
  },
];


function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
