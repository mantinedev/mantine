import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" accept="image/png,image/jpeg" />;
}
`;

function Demo() {
  return (
    <FileInput
      maw={320}
      mx="auto"
      label="Upload files"
      placeholder="Upload files"
      accept="image/png,image/jpeg"
    />
  );
}

export const accept: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
