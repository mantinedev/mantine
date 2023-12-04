import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`;

function Demo() {
  return (
    <ColorInput
      fixOnBlur={false}
      label="Value is not fixed on blur"
      placeholder="May contain invalid value"
    />
  );
}

export const fixOnBlur: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
