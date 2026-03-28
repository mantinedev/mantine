/* eslint-disable no-console */

import { FileTextIcon, GaugeIcon, HouseIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import { SpotlightActionData } from '@mantine/spotlight';
import { MantineDemo } from '@mantinex/demo';
import { SpotlightDemoBase } from './_demo-base';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <HouseIcon size={24} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <GaugeIcon size={24} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FileTextIcon size={24} />,
  },
];

const code = `
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { HouseIcon, GaugeIcon, FileTextIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <HouseIcon size={24} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <GaugeIcon size={24} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FileTextIcon size={24} />,
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <SpotlightDemoBase
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      shortcut={null}
      searchProps={{
        leftSection: <MagnifyingGlassIcon size={20} />,
        placeholder: 'Search...',
      }}
    />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
