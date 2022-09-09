/* eslint-disable no-console */
import React, { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight';
import { IconAlien, IconSearch } from '@tabler/icons';
import { actions } from './_actions';

const code = `
import { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { SpotlightProvider, registerSpotlightActions, openSpotlight, removeSpotlightActions } from '@mantine/spotlight';
import { IconAlien, IconSearch } from '@tabler/icons';

function SpotlightControls() {
  const [registered, setRegistered] = useState(false);
  const spotlight = useSpotlight();

  return (
    <Group position="center">
      <Button onClick={() => openSpotlight()}>Open spotlight</Button>
      {registered ? (
        <Button
          variant="outline"
          color="red"
          onClick={() => {
            setRegistered(false);
            removeSpotlightActions(['secret-action-1', 'secret-action-2']);
          }}
        >
          Remove extra actions
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => {
            setRegistered(true);
            registerSpotlightActions([
              {
                id: 'secret-action-1',
                title: 'Secret action',
                description: 'It was registered with a button click',
                icon: <IconAlien size={18} />,
                onTrigger: () => console.log('Secret'),
              },
              {
                id: 'secret-action-2',
                title: 'Another secret action',
                description: 'You can register multiple actions with just one command',
                icon: <IconAlien size={18} />,
                onTrigger: () => console.log('Secret'),
              },
            ]);
          }}
        >
          Register extra actions
        </Button>
      )}
    </Group>
  );
}

const actions = [/* ... see in previous demos */];

export function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + C"
    >
      <SpotlightControls />
    </SpotlightProvider>
  );
}

`;

function SpotlightControls() {
  const [registered, setRegistered] = useState(false);
  const spotlight = useSpotlight();

  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>Open spotlight</Button>
      {registered ? (
        <Button
          variant="outline"
          color="red"
          onClick={() => {
            setRegistered(false);
            spotlight.removeActions(['secret-action-1', 'secret-action-2']);
          }}
        >
          Remove extra actions
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => {
            setRegistered(true);
            spotlight.registerActions([
              {
                id: 'secret-action-1',
                title: 'Secret action',
                description: 'It was registered with a button click',
                icon: <IconAlien size={18} />,
                onTrigger: () => console.log('Secret'),
              },
              {
                id: 'secret-action-2',
                title: 'Another secret action',
                description: 'You can register multiple actions with just one command',
                icon: <IconAlien size={18} />,
                onTrigger: () => console.log('Secret'),
              },
            ]);
          }}
        >
          Register extra actions
        </Button>
      )}
    </Group>
  );
}

export function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      shortcut="mod + shift + C"
      searchPlaceholder="Search..."
    >
      <SpotlightControls />
    </SpotlightProvider>
  );
}

export const register: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
