import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}

export const polymorphic: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
