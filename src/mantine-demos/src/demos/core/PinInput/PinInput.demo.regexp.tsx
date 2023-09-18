import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput } from '@mantine/core';

const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />;
}
`;

function Demo() {
  return <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />;
}

export const regexp: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
