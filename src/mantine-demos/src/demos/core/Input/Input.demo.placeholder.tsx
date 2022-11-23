import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
