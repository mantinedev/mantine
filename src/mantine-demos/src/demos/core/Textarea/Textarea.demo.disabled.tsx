import { Box, Textarea } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea disabled/>

      <fieldset disabled>
        <Textarea />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Textarea label="Disabled" placeholder="Your comment" disabled />

      <br />

      <fieldset disabled>
        <Textarea label="Disabled by fieldset" placeholder="Your comment" />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};