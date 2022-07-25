import React from 'react';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons';
import { Input, Tooltip } from '@mantine/core';

const code = `
import { Input, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons';

function Demo() {
  return (
    <Input
      icon={<IconBrandTwitter size={16} />}
      placeholder="Your twitter"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
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
      icon={<IconBrandTwitter size={16} stroke={1.5} />}
      placeholder="Your twitter"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size={18} stroke={1.5} style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
