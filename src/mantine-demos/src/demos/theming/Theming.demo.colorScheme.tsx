import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useMantineColorScheme, Button, Group } from '@mantine/core';

const code = `
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`;

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}

export const colorScheme: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
