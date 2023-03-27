import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Textarea, Box } from '@mantine/core';

const code = `
// Error as boolean – red border color
<Textarea error />

// Error as React node – red border color and message below input
<Textarea error="Comment should not include bad words" />
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Textarea label="Your comment" placeholder="Your comment" error />

      <Textarea
        mt="md"
        label="Your comment"
        placeholder="Your comment"
        error="Comment should not include bad words"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
