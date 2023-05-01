import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput, Group, Box } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Group position="center">
        <PinInput disabled />
      </Group>

      <fieldset disabled>
        <Group position="center">
          <PinInput />
        </Group>
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <PinInput disabled />
      </Group>

      <br />

      <fieldset disabled>
        <Group position="center">
          <PinInput />
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
