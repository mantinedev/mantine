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

const code = `
import React from 'react';
import { Badge, Group } from '@mantine/core';
import { MANTINE_COLORS } from '../../../theme';


const getDots = (props?: any) =>
  MANTINE_COLORS.map((color) => (
    <Badge key={color} color={color} variant="dot" {...props}>
      {color}
    </Badge>
  ));

function Demo() {
  return (
      <Group style={{ padding: 10 }}>{getDots({ size: 'md' })}</Group>
  );
}
`;

function Demo() {
  return <Group style={{ padding: 10 }}>{getDots({ size: 'md' })}</Group>;
}

export const dots: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
