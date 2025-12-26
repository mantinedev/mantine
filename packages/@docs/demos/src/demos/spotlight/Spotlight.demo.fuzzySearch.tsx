/* eslint-disable no-console */

import { IconDashboard, IconFileText, IconHome, IconSearch } from '@tabler/icons-react';
import Fuse from 'fuse.js';
import { SpotlightActionData, SpotlightFilterFunction } from '@mantine/spotlight';
import { MantineDemo } from '@mantinex/demo';
import { SpotlightDemoBase } from './_demo-base';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to learn more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText size={24} stroke={1.5} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Manage application preferences and configurations',
    onClick: () => console.log('Settings'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
];

const fuzzySearchFilter: SpotlightFilterFunction = (query, searchActions) => {
  if (!query.trim()) {
    return searchActions;
  }

  const flatActions = searchActions.reduce<any[]>((acc, item) => {
    if ('actions' in item) {
      return [...acc, ...item.actions.map((action) => ({ ...action, group: item.group }))];
    }
    return [...acc, item];
  }, []);

  const fuse = new Fuse(flatActions, {
    keys: ['label', 'description'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  const results = fuse.search(query).map((result) => result.item);

  const groups: Record<string, any> = {};
  const result: any[] = [];

  results.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });

  return result;
};

const code = `
import Fuse from 'fuse.js';
import { Button } from '@mantine/core';
import {
  Spotlight,
  SpotlightActionData,
  SpotlightFilterFunction,
  spotlight,
} from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to learn more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText size={24} stroke={1.5} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Manage application preferences and configurations',
    onClick: () => console.log('Settings'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
];

const fuzzySearchFilter: SpotlightFilterFunction = (query, searchActions) => {
  if (!query.trim()) {
    return searchActions;
  }

  const flatActions = searchActions.reduce<any[]>((acc, item) => {
    if ('actions' in item) {
      return [...acc, ...item.actions.map((action) => ({ ...action, group: item.group }))];
    }
    return [...acc, item];
  }, []);

  const fuse = new Fuse(flatActions, {
    keys: ['label', 'description'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  const results = fuse.search(query).map((result) => result.item);

  const groups: Record<string, any> = {};
  const result: any[] = [];

  results.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });

  return result;
};

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        filter={fuzzySearchFilter}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
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
      filter={fuzzySearchFilter}
      nothingFound="Nothing found..."
      highlightQuery
      shortcut={null}
      searchProps={{
        leftSection: <IconSearch size={20} stroke={1.5} />,
        placeholder: 'Search...',
      }}
    />
  );
}

export const fuzzySearch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
