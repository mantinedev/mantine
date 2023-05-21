import { Box, Group, Switch } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch disabled >;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <Switch disabled />
      </Group>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
