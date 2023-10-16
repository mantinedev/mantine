import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Checkbox } from '@mantine/core';

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}

export const iconColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
