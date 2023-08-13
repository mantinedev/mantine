import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NativeSelect, Box } from '@mantine/core';

const code = `
// Error as boolean – red border color
<NativeSelect error />

// Error as React node – red border color and message below input
<NativeSelect error="Pick at least one item" />
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick one"
        error
      />

      <NativeSelect
        mt="md"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick one"
        error="Pick at least one item"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
