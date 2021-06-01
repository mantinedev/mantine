import React from 'react';
import { Divider } from '../Divider';

const code = `
<Divider />
<Divider variant="dashed" />
<Divider variant="dotted" />
`;

function Demo() {
  return (
    <>
      <Divider margins="sm" />
      <Divider margins="sm" variant="dashed" />
      <Divider margins="sm" variant="dotted" />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
