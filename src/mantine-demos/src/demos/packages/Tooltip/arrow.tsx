import React from 'react';
import { Tooltip, Group, Button } from '@mantine/core';

const code = `
<Tooltip label="Default arrow" withArrow opened>
  <Button variant="outline">Default arrow</Button>
</Tooltip>

<Tooltip label="Arrow with size" withArrow arrowSize={3} opened>
  <Button variant="outline">With size</Button>
</Tooltip>
`;

export function Demo() {
  return (
    <Group position="center">
      <Group position="center" style={{ paddingTop: 30 }}>
        <Tooltip label="Default arrow" withArrow opened>
          <Button variant="outline">Default arrow</Button>
        </Tooltip>
        <Tooltip label="Arrow with size" withArrow arrowSize={3} opened>
          <Button variant="outline">With size</Button>
        </Tooltip>
      </Group>
    </Group>
  );
}

export const arrow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
