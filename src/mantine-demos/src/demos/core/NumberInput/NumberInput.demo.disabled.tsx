import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled />;
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      label="Enter your age"
      placeholder="Your age"
      disabled
      value={20}
    />
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
