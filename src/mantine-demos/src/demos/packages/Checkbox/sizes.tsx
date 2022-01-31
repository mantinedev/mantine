import React from 'react';
import { Checkbox, CheckboxProps, MANTINE_SIZES, Group } from '@mantine/core';

const getSizes = (props?: CheckboxProps) =>
  MANTINE_SIZES.map((size) => (
    <Checkbox key={size} size={size} defaultChecked label={`${size} checkbox`} {...props} />
  ));

function Demo() {
  return (
    <Group direction="column" spacing="sm">
      {getSizes()}
    </Group>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
