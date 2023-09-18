import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
