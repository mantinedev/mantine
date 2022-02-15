import React from 'react';
import { ThemeIcon, Group, MANTINE_SIZES } from '@mantine/core';
import { Photo } from 'tabler-icons-react';

function Demo() {
  const items = MANTINE_SIZES.map((size) => (
    <ThemeIcon key={size} size="xl" radius={size}>
      <Photo size={24} />
    </ThemeIcon>
  ));

  return <Group position="center">{items}</Group>;
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
};
