import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
