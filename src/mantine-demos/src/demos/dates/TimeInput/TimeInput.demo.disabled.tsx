import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TimeInput } from '@mantine/dates';
import { Box } from '@mantine/core';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimeInput disabled />

      <fieldset disabled>
        <TimeInput disabled />
      </fieldset>
    </>
  )
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TimeInput disabled />

      <br />

      <fieldset disabled>
        <TimeInput />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
