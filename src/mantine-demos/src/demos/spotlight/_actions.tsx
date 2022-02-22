/* eslint-disable no-console */
import React from 'react';
import type { SpotlightAction } from '@mantine/spotlight';
import { Home, Dashboard, FileText } from 'tabler-icons-react';

export const actions: SpotlightAction[] = [
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
