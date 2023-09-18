import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Divider } from '@mantine/core';

const code = `
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
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
  type: 'code',
  code,
  component: Demo,
};
