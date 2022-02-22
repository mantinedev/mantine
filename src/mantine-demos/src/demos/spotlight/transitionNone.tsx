import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + 2"
      transitionDuration={0}
      {...otherProps}
    >
      <YourApp />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      transitionDuration={0}
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
