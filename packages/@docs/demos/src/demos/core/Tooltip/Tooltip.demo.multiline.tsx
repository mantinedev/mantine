import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}
`;

export function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}

export const multiline: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
