import React from 'react';
import { Progress } from '../Progress';

const code = `
<Progress value={75} label="75%" size="xl" />
`;

function Label() {
  return <Progress value={75} label="75%" size="xl" />;
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
