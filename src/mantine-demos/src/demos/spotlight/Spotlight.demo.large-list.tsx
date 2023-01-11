/* eslint-disable no-console */
import { MantineDemo } from '@mantine/ds';
import type { SpotlightAction } from '@mantine/spotlight';
import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: \`Action \${index}\`,
    onTrigger: () => console.log(\`Action \${index}\`),
  }));

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      limit={100}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
    >
      <App />
    </SpotlightProvider>
  );
}
`;

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: `Action ${index}`,
    onTrigger: () => console.log(`Action ${index}`),
  }));

function Demo() {
  return (
    <Wrapper
      actions={actions}
      limit={100}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
      buttonLabel="Open spotlight with large list"
    />
  );
}

export const largeList: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
