import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Anchor } from '@mantine/core';

const code = `
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
