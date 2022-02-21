/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Box } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { SpotlightProvider, useSpotlight, SpotlightProviderProps, SpotlightAction } from '.';

const DEFAULT_ACTIONS: SpotlightAction[] = [
  {
    title: 'Action 1',
    description: 'This action will trigger something important',
    onTrigger: () => console.log('Action 1'),
  },
  { title: 'Action 2', onTrigger: () => console.log('Action 2') },
];

function Control() {
  const spotlight = useSpotlight();
  return (
    <Box sx={{ padding: 40 }}>
      <Button onClick={() => spotlight.openSpotlight()}>Open spotlight</Button>
    </Box>
  );
}

function Wrapper(props: Omit<SpotlightProviderProps, 'children'>) {
  return (
    <SpotlightProvider {...props}>
      <Control />
    </SpotlightProvider>
  );
}

const defaultProps: Omit<SpotlightProviderProps, 'children'> = {
  actions: DEFAULT_ACTIONS,
  searchPlaceholder: 'Search...',
  searchIcon: <Search size={18} />,
};

storiesOf('@mantine/spotlight', module)
  .add('Default', () => <Wrapper {...defaultProps} searchIcon={null} />)
  .add('Centered', () => <Wrapper centered {...defaultProps} />);
