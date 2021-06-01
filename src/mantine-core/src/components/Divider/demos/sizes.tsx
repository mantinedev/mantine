import React from 'react';
import { Divider } from '../Divider';

const code = `
<Divider size="xs" />
<Divider size="sm" />
<Divider size="md" />
<Divider size="lg" />
<Divider size="xl" />
<Divider size={10} />
`;

function Demo() {
  return (
    <>
      <Divider margins="xs" size="xs" />
      <Divider margins="xs" size="sm" />
      <Divider margins="xs" size="md" />
      <Divider margins="xs" size="lg" />
      <Divider margins="xs" size="xl" />
      <Divider margins="xs" size={10} />
    </>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
