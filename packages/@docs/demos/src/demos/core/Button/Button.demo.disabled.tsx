import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`;

function Demo() {
  return <Button disabled>Disabled button</Button>;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
