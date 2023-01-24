import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Button, Group } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Button component="a" href="#" variant="outline" leftIcon={<IconExternalLink size={14} />}>
      Open in new tab
    </Button>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button<'a'>
        component="a"
        href="#"
        variant="outline"
        leftIcon={<IconExternalLink size={14} />}
      >
        Open in new tab
      </Button>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
