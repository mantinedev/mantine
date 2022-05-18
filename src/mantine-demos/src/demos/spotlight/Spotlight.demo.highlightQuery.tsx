import React from 'react';
import { IconSearch } from '@tabler/icons';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + L"
      highlightQuery
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
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + L"
      highlightQuery
    />
  );
}

export const highlightQuery: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
