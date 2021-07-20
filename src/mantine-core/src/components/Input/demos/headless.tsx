import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input } from '../Input';

const code = `
<Input variant="headless" placeholder="Add your own styles with styles API" />
`;

function Demo() {
  return (
    <Input
      styles={{ input: { width: '100%' } }}
      icon={<TwitterLogoIcon />}
      rightSection="$$$"
      variant="headless"
      placeholder="Add your own styles with styles API"
    />
  );
}

export const headless: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
