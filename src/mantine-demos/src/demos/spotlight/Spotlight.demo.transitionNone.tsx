import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + 2"
      transitionProps={{ duration: 0 }}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchIcon={<IconSearch size="1.2rem" />}
      transitionProps={{ duration: 0 }}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 2"
      buttonLabel="Open spotlight without transition"
    />
  );
}

export const transitionNone: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
