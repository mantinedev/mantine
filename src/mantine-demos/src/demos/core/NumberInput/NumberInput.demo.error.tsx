import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}

export const error: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
