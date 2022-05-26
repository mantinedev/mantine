import React from 'react';
import { IconAlertCircle } from '@tabler/icons';
import { Input, Tooltip } from '@mantine/core';

const code = `
import { Input, Tooltip } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

function Demo() {
  return (
    <Input
      placeholder="Your email"
      rightSection={
        <Tooltip label="We do not send spam" position="top-end" withinPortal withArrow>
          <div>
            <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Input
      placeholder="Your email"
      rightSection={
        <Tooltip label="We do not send spam" position="top-end" withinPortal withArrow>
          <div>
            <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
    />
  );
}

export const tooltip: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
