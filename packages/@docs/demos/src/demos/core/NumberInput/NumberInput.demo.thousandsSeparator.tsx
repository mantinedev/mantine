import React from 'react';
import { NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="With thousands separator"
      placeholder="Thousands are separated with coma"
      thousandSeparator=","
      defaultValue={1_000_000}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="With thousands separator"
      placeholder="Thousands are separated with coma"
      thousandSeparator=","
      defaultValue={1_000_000}
    />
  );
}

export const thousandsSeparator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
