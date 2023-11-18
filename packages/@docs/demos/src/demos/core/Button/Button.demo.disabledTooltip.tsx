import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Tooltip } from '@mantine/core';

const code = `
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}

export const disabledTooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
