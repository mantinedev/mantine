import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Box, NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput disabled />

      <fieldset disabled>
        <NumberInput />
      </fieldset>
    </>
  )
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NumberInput label="Disabled" placeholder="Your age" disabled value={20} />

      <br />

      <fieldset disabled>
        <NumberInput label="Disabled by fieldset" placeholder="Your age" value={20} />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
