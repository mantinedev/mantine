import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
