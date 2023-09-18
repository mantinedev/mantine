import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}

export const type: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
