import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Checkbox, MANTINE_SIZES, Stack } from '@mantine/core';

function Demo() {
  const items = MANTINE_SIZES.map((size) => (
    <Checkbox key={size} size={size} defaultChecked label={`${size} checkbox`} />
  ));

  return <Stack spacing="sm">{items}</Stack>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
