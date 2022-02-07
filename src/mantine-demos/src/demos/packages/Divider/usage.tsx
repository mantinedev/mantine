import React from 'react';
import { Divider } from '@mantine/core';

const code = `
<Divider />
<Divider variant="dashed" />
<Divider variant="dotted" />
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
