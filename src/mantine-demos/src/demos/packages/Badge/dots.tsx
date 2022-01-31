import React from 'react';
import { Group, MANTINE_COLORS, Badge } from '@mantine/core';

const getDots = (props?: any) =>
  MANTINE_COLORS.map((color) => (
    <Badge key={color} color={color} variant="dot" {...props}>
      {color}
    </Badge>
  ));

function Demo() {
  return <Group position="center">{getDots()}</Group>;
}

export const dots: MantineDemo = {
  type: 'demo',
  component: Demo,
};
