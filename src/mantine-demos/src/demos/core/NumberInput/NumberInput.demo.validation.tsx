import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput, Box } from '@mantine/core';

const code = `
// Error as boolean – red border color
<NumberInput error />

// Error as React node – red border color and message below input
<NumberInput error="You must be at least 21" />
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NumberInput label="Your age" defaultValue={20} error placeholder="Invalid without error" />
      <NumberInput
        mt="md"
        defaultValue={20}
        placeholder="Invalid with error"
        label="Your age"
        error="You must be at least 21"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
