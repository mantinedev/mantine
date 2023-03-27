import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Box } from '@mantine/core';

const code = `
// Error as boolean – red border color
<TextInput error />

// Error as React node – red border color and message below input
<TextInput error="Invalid email" />
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TextInput label="Your email" placeholder="you@email.com" error />
      <TextInput mt="md" label="Your email" placeholder="you@email.com" error="Invalid email" />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
