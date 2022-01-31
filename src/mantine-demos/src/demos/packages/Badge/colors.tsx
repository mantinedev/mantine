import React from 'react';
import { Badge, BadgeProps, MANTINE_COLORS, Group } from '@mantine/core';

const getThemes = (props?: BadgeProps<'div'>) =>
  MANTINE_COLORS.map((color) => (
    <Badge key={color} color={color} {...props}>
      {color}
    </Badge>
  ));

function Demo() {
  return (
    <>
      <Group position="center">{getThemes({ variant: 'outline' })}</Group>
      <Group position="center" style={{ marginTop: 25 }}>
        {getThemes({ variant: 'light' })}
      </Group>
      <Group position="center" style={{ marginTop: 25 }}>
        {getThemes({ variant: 'filled' })}
      </Group>
      <Group position="center" style={{ marginTop: 25 }}>
        {getThemes({ variant: 'dot' })}
      </Group>
    </>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
