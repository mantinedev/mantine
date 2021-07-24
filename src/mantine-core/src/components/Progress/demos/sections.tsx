import React from 'react';
import { Progress } from '../Progress';

const code = `
<Progress
  size="xl"
  sections={[
    { value: 40, color: 'cyan' },
    { value: 20, color: 'red' },
    { value: 15, color: 'lime' },
  ]}
/>
`;

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'red' },
        { value: 15, color: 'lime' },
      ]}
    />
  );
}

export const sections: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
