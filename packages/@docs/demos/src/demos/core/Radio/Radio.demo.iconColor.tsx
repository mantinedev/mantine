import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Radio } from '@mantine/core';

const code = `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`;

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}

export const iconColor: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
