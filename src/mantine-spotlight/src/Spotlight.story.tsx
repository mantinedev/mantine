/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Box } from '@mantine/core';
import { SpotlightProvider, useSpotlight, SpotlightProviderProps, SpotlightAction } from '.';

const DEFAULT_ACTIONS: SpotlightAction[] = [
  { title: 'Action 1', onTrigger: () => console.log('Action 1') },
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

storiesOf('@mantine/spotlight', module).add('Initial actions', () => (
  <Wrapper actions={DEFAULT_ACTIONS} />
));
