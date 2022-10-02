import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineProvider, Group, Button, MantineTheme } from '@mantine/core';

function Wrapper({ primaryShade }: { primaryShade: MantineTheme['primaryShade'] }) {
  return (
    <MantineProvider inherit theme={{ primaryShade }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}

const codeTemplate = (props: string) => `
import { MantineProvider, Group, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props
      .replace(' primaryShade={', '')
      .replace('}', '')} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}
`;

export const primaryShade: MantineDemo = {
  type: 'configurator',
  component: Wrapper as any,
  codeTemplate,
  configurator: [{ name: 'primaryShade', type: 'number', initialValue: 6, min: 0, max: 9 }],
};
