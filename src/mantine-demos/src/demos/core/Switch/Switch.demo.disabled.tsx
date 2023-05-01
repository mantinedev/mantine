import { Box, Group, Switch } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { Switch } from '@mantine/core';

function Demo() {
  return (
    <>
      <Switch disabled >

      <fieldset disabled>
        <Switch />
      </fieldset>
    </>
  )
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <Switch disabled />
      </Group>

      <br />

      <fieldset disabled>
        <Group position="center">
          <Switch />
        </Group>
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
