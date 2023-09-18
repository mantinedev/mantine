import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`;

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}

export const accept: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
