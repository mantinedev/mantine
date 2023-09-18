import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorPicker } from '@mantine/core';

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
