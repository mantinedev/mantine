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
      transitionProps={{ duration: 300, transition: 'slide-down' }}
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
      searchIcon={<IconSearch size={18} />}
      transitionProps={{ duration: 300, transition: 'slide-down' }}
      searchPlaceholder="Search..."
      shortcut="mod + shift + L"
      buttonLabel="Open spotlight with custom transition"
    />
  );
}

export const customTransition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
