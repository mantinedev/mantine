import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input } from '@mantine/core';

const code = `
<Input
  variant="headless"
  placeholder="Add your own styles with styles API"
  icon={<TwitterLogoIcon />}
  rightSection="$"
  styles={{
    input: {
      width: '100%',
      boxSizing: 'border-box',
    }
  }}
/>
`;

function Demo() {
  return (
    <Input
      styles={{ input: { width: '100%', boxSizing: 'border-box' } }}
      icon={<TwitterLogoIcon />}
      rightSection="$"
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
