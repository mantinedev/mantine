import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
