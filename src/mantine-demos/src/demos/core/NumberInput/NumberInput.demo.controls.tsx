import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput, Box } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="By default controls are visible" />

      <NumberInput
        hideControls
        label="Disable them with hideControls prop"
      />

      <NumberInput
        label="Disabled"
        disabled
        label="Controls also not rendered when input is disabled"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={420} mx="auto">
      <NumberInput label="By default controls are visible" placeholder="Controls are visible" />

      <NumberInput
        mt="md"
        hideControls
        label="Disable them with hideControls prop"
        placeholder="Controls are disabled"
      />

      <NumberInput
        mt="md"
        disabled
        label="Controls also not rendered when input is disabled"
        placeholder="Input disabled"
      />
    </Box>
  );
}

export const controls: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
