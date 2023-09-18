import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Kbd } from '@mantine/core';

const code = `
import { Kbd } from '@mantine/core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
