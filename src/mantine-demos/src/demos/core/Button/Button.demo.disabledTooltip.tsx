import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Group, Tooltip } from '@mantine/core';

const code = `
import { Button, Group, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip for disabled button">
        <Button
          data-disabled
          sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
          onClick={(event) => event.preventDefault()}
        >
          Disabled button
        </Button>
      </Tooltip>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip for disabled button">
        <Button
          data-disabled
          sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
          onClick={(event) => event.preventDefault()}
        >
          Disabled button
        </Button>
      </Tooltip>
    </Group>
  );
}

export const disabledTooltip: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
