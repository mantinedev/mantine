import React from 'react';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Input, Tooltip } from '@mantine/core';

const code = `
import { Input, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <Input
      icon={<IconBrandTwitter size="1rem" />}
      placeholder="Your twitter"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
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
      icon={<IconBrandTwitter size="1rem" stroke={1.5} />}
      placeholder="Your twitter"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" stroke={1.5} style={{ display: 'block', opacity: 0.5 }} />
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
