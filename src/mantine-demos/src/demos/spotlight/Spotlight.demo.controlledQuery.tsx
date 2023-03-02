import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { SpotlightAction } from '@mantine/spotlight';
import { Wrapper } from './_wrapper';

const code = `
import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { SpotlightProvider, spotlight, SpotlightAction } from '@mantine/spotlight';

function SpotlightControl() {
  return (
    <Group position="center">
      <Button onClick={spotlight.open}>Open spotlight</Button>
    </Group>
  );
}


function Demo() {
  const [query, setQuery] = useState('');
  const actions: SpotlightAction[] =
    query !== '%%secret%%'
      ? [
          {
            title: 'Reveal secret actions',
            description: 'Click this action to reveal secret actions',
            onTrigger: () => setQuery('%%secret%%'),
            closeOnTrigger: false,
          },
        ]
      : [
          { title: 'Super secret action', keywords: '%%secret%%', onTrigger: () => {} },
          {
            title: 'Rick roll',
            description: 'Do not click',
            keywords: '%%secret%%',
            onTrigger: () => {
              window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            },
          },
        ];

  return (
    <SpotlightProvider
      actions={actions}
      query={query}
      onQueryChange={setQuery}
      searchIcon={<IconSearch size="1.2rem" />}
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
  const [query, setQuery] = useState('');
  const actions: SpotlightAction[] =
    query !== '%%secret%%'
      ? [
          {
            title: 'Reveal secret actions',
            description: 'Click this action to reveal secret actions',
            onTrigger: () => setQuery('%%secret%%'),
            closeOnTrigger: false,
          },
        ]
      : [
          { title: 'Super secret action', keywords: '%%secret%%', onTrigger: () => {} },
          {
            title: 'Rick roll',
            description: 'Do not click',
            keywords: '%%secret%%',
            onTrigger: () => {
              window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            },
          },
        ];

  return (
    <Wrapper
      actions={actions}
      query={query}
      onQueryChange={setQuery}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    />
  );
}

export const controlledQuery: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
