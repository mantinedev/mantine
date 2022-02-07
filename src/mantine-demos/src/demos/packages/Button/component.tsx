import React from 'react';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { Button, Group } from '@mantine/core';

const code = `
<Button
  component="a"
  href="https://mantine.dev"
  target="_blank"
  variant="outline"
  leftIcon={<ExternalLinkIcon />}
>
  Mantine docs
</Button>
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        component="a"
        href="https://mantine.dev"
        target="_blank"
        variant="outline"
        leftIcon={<ExternalLinkIcon />}
      >
        Mantine docs
      </Button>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
