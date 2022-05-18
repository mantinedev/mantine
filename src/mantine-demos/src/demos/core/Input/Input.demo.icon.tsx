import React from 'react';
import { IconBrandTwitter } from '@tabler/icons';
import { Input, Badge } from '@mantine/core';

const code = `
import { Input, Badge } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons';

function Demo() {
  return (
    <Input
      icon={<IconBrandTwitter size={16} />}
      placeholder="Your twitter"
      rightSectionWidth={70}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={
        <Badge color="blue" variant="filled">
          new
        </Badge>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Input
      icon={<IconBrandTwitter size={16} />}
      placeholder="Your twitter"
      rightSectionWidth={70}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={
        <Badge color="blue" variant="filled">
          new
        </Badge>
      }
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
