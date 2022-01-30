import React from 'react';
import { upperFirst } from '@mantine/hooks';
import { Tooltip, Badge, Group, MANTINE_COLORS } from '@mantine/core';

export function Demo() {
  const colors = MANTINE_COLORS.map((color) => (
    <Tooltip key={color} color={color} label={upperFirst(color)} withArrow>
      <Badge color={color}>{upperFirst(color)}</Badge>
    </Tooltip>
  ));

  return <Group position="center">{colors}</Group>;
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
