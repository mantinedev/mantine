import React from 'react';
import { useMantineTheme, Stack } from '@mantine/core';

const code = `
<Stack style={{ backgroundColor: color }}>
  <div>Something</div>
  <div>Something</div>
  <div>Something</div>
</Stack>

<Stack spacing="xs" direction="row" style={{ backgroundColor: color }}>
  <div>Something</div>
  <div>Something</div>
</Stack>

<Stack spacing="md" direction="column" style={{ backgroundColor: color }}>
  <div>Something</div>
  <div>Something</div>
</Stack>
`;

function Demo() {
  const theme = useMantineTheme();
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0];

  return (
    <Stack>
      <Stack style={{ backgroundColor: color }}>
        <div>Something</div>
        <div>Something</div>
        <div>Something</div>
      </Stack>

      <Stack spacing="xs" direction="row" style={{ backgroundColor: color }}>
        <div>Something</div>
        <div>Something</div>
      </Stack>

      <Stack spacing="md" direction="column" style={{ backgroundColor: color }}>
        <div>Something</div>
        <div>Something</div>
      </Stack>
    </Stack>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
