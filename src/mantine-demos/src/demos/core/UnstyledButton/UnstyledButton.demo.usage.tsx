import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { UnstyledButton } from '@mantine/core';

const code = `
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
`;

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
