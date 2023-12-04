import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;

function Demo() {
  return <FileInput multiple label="Upload files" placeholder="Upload files" />;
}

export const multiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
