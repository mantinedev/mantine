import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Textarea, Box } from '@mantine/core';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
        mt="md"
      />
    </Box>
  );
}

export const autosize: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
