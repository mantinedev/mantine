import React from 'react';
import { MultiSelect, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
// Error as boolean – red border color
<MultiSelect error />

// Error as React node – red border color and message below input
<MultiSelect error="Pick at least one item" />
`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error
      />

      <MultiSelect
        mt="md"
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
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
