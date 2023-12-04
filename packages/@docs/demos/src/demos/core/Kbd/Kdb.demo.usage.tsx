import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { Kbd } from '@mantine/core';

const code = `
import { Kbd } from '@mantine/core';

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}
`;

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
