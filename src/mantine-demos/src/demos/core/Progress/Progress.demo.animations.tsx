import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Progress } from '@mantine/core';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
