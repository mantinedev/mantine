import React from 'react';
import { upperFirst } from '@mantine/hooks';
import { Tooltip, Button, Group, MANTINE_COLORS } from '../../../index';

export function Demo() {
  const colors = MANTINE_COLORS.map((color) => (
    <Tooltip data-mantine-composable key={color} color={color} label={upperFirst(color)} withArrow>
      <Button variant="outline" color={color}>
        {upperFirst(color)}
      </Button>
    </Tooltip>
  ));

  return <Group position="center">{colors}</Group>;
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
