import React from 'react';
import { Kbd } from '@mantine/core';

const code = `
<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
