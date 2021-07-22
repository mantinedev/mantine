import React from 'react';
import { Tooltip, Group, Button } from '../../../index';

const code = `
<Tooltip data-mantine-composable label="Ctrl + J" delay={500}>
  <Button variant="outline">Toggle color scheme</Button>
</Tooltip>
`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip data-mantine-composable label="Ctrl + J" delay={500}>
        <Button variant="outline">Toggle color scheme</Button>
      </Tooltip>
    </Group>
  );
}

export const delay: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
