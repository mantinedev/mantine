import React from 'react';
import { Photo } from 'tabler-icons-react';
import { ThemeIcon, Group, MANTINE_SIZES } from '@mantine/core';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

function Demo() {
  const items = MANTINE_SIZES.map((size) => (
    <ThemeIcon key={size} size={size}>
      <Photo size={iconSizes[size]} />
    </ThemeIcon>
  ));

  return <Group position="center">{items}</Group>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
