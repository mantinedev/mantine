import { Box, FileInput } from '@mantine/core';
import React from 'react';
import { MantineDemo } from '@mantine/ds';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput disabled />

      <fieldset disabled>
        <FileInput />
      </fieldset>
    </>
  );
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <FileInput disabled label="Disabled" placeholder="Upload files" />

      <br />

      <fieldset disabled>
        <FileInput label="Disabled by fieldset" placeholder="Upload files" />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
