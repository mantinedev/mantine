import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`;

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" clearable />;
}

export const clearable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
