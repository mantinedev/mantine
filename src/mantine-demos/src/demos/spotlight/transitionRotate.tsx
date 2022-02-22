import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + 2"
      transitionDuration={300}
      transition="rotate-right"
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
      transitionDuration={300}
      transition="rotate-right"
      searchPlaceholder="Search..."
      shortcut="mod + shift + L"
      buttonLabel="Open spotlight with rotate 300ms transition"
    />
  );
}

export const transitionRotate: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
