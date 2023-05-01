import { Box, Radio } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React from 'react';

const code = `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />

      <fieldset disabled>
        <Radio checked label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" mt="xs" />
      <Radio disabled label="Svelte" value="sv" mt="xs" />

      <br />

      <fieldset disabled>
        <Radio checked label="React" value="react" />
        <Radio label="Angular" value="nu" mt="xs" />
        <Radio label="Svelte" value="sv" mt="xs" />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
