import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
