import React from 'react';
import { Tooltip, Group, Button } from '@mantine/core';

const code = `
<Tooltip
  wrapLines
  width={220}
  withArrow
  transition="fade"
  transitionDuration={200}
  label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
>
  <Button variant="outline">Multiline tooltip</Button>
</Tooltip>
`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip
        wrapLines
        width={220}
        withArrow
        transition="fade"
        transitionDuration={200}
        label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
      >
        <Button variant="outline">Multiline tooltip</Button>
      </Tooltip>
    </Group>
  );
}

export const multiline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
