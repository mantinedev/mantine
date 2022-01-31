import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input, Badge } from '@mantine/core';

const code = `
<Input
  icon={<TwitterLogoIcon />}
  placeholder="Your twitter"
  rightSection={rightSection}
  rightSectionWidth={70}
  styles={{ rightSection: { pointerEvents: 'none' } }}
/>
`;

function Demo() {
  const rightSection = (
    <Badge color="blue" variant="filled">
      new
    </Badge>
  );

  return (
    <Input
      icon={<TwitterLogoIcon />}
      placeholder="Your twitter"
      rightSection={rightSection}
      rightSectionWidth={70}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
