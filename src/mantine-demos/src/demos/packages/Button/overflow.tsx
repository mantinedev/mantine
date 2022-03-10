import React from 'react';
import { Button, Group } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <div style={{ width: 200 }}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </div>

      <div style={{ width: 140 }}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </div>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <div style={{ width: 200 }}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </div>

      <div style={{ width: 140 }}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </div>
    </Group>
  );
}

export const overflow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
