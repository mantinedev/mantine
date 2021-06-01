import React from 'react';
import { Badge } from '../Badge';
import { Group } from '../../Group/Group';
import { MANTINE_COLORS } from '../../../theme';

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
