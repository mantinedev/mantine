import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput, Box } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Error as boolean – red border color */}
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      {/* Error as React node – red border color and message below input */}
      <ColorInput
        mt="md"
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      {/* Error as boolean – red border color */}
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      {/* Error as React node – red border color and message below input */}
      <ColorInput
        mt="md"
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
