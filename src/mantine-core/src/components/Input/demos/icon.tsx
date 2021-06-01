import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input } from '../Input';
import { Badge } from '../../Badge/Badge';

const code = `
<Input
  icon={<TwitterLogoIcon />}
  placeholder="Your twitter"
  rightSectionWidth={70}
  rightSectionProps={{ style: { pointerEvents: 'none' } }}
  rightSection={rightSection}
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
      rightSectionWidth={70}
      rightSectionProps={{ style: { pointerEvents: 'none' } }}
      rightSection={rightSection}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
