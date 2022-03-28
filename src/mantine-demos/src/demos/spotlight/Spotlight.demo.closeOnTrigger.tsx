import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
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
      searchPlaceholder="Search..."
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
    />
  );
}

export const closeOnTrigger: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
