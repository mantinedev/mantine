import { Box, Textarea } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea disabled/>;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Textarea label="Disabled" placeholder="Your comment" disabled />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
