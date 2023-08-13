/* eslint-disable no-console */
import React, { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight';
import { IconAlien, IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { actions } from './_actions';

const code = `
import { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import { IconAlien, IconSearch } from '@tabler/icons-react';

function SpotlightControls() {
  const [registered, setRegistered] = useState(false);

  return (
    <Group position="center">
      <Button onClick={spotlight.open}>Open spotlight</Button>
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
                icon: <IconAlien size="1.2rem" />,
                onTrigger: () => console.log('Secret'),
              },
              {
                id: 'secret-action-2',
                title: 'Another secret action',
                description: 'You can register multiple actions with just one command',
                icon: <IconAlien size="1.2rem" />,
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
  // It is required to store actions in state for register/remove functions to work
  const [actions, setActions] = useState([/* ... see in previous demos */]);

  return (
    <SpotlightProvider
      actions={actions}
      onActionsChange={setActions}
      searchIcon={<IconSearch size="1.2rem" />}
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
                icon: <IconAlien size="1.2rem" />,
                onTrigger: () => console.log('Secret'),
              },
              {
                id: 'secret-action-2',
                title: 'Another secret action',
                description: 'You can register multiple actions with just one command',
                icon: <IconAlien size="1.2rem" />,
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
  const [_actions, setActions] = useState(actions);
  return (
    <SpotlightProvider
      actions={_actions}
      onActionsChange={setActions}
      searchIcon={<IconSearch size="1.2rem" />}
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
