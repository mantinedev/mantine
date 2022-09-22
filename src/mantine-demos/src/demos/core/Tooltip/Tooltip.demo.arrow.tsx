import React from 'react';
import { Tooltip, Group, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion" withArrow>
        <Button variant="outline">long content arrow postion</Button>
      </Tooltip>

      <Tooltip position="left" label="long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion" withArrow>
        <Button variant="outline">long content arrow postion left</Button>
      </Tooltip>
      
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>

      <Tooltip label="Arrow with size" withArrow arrowSize={6}>
        <Button variant="outline">With size</Button>
      </Tooltip>
    </>
  );
}

`;

export function Demo() {
  return (
    <Group position="left">
      <Tooltip
        label="long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion"
        withArrow
      >
        <Button variant="outline">long content arrow postion</Button>
      </Tooltip>
      <Tooltip
        position="left"
        label="long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion long content arrow postion"
        withArrow
      >
        <Button variant="outline">long content arrow postion left</Button>
      </Tooltip>
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" withArrow arrowSize={6}>
        <Button variant="outline">With size</Button>
      </Tooltip>
    </Group>
  );
}

export const arrow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
