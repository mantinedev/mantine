import React from 'react';
import { Checkbox, MANTINE_SIZES, Group } from '@mantine/core';

function Demo() {
  const items = MANTINE_SIZES.map((size) => (
    <Checkbox key={size} size={size} defaultChecked label={`${size} checkbox`} />
  ));

  return (
    <Group direction="column" spacing="sm">
      {items}
    </Group>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
