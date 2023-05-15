import { Box, JsonInput } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return <JsonInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <JsonInput
        defaultValue='{ "a": 1, "B": 2 }'
        label="Disabled"
        placeholder="Disabled"
        formatOnBlur
        disabled
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
