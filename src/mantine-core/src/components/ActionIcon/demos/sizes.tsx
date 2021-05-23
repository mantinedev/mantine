import React from 'react';
import { ImageIcon } from '@modulz/radix-icons';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { Group } from '../../Group/Group';
import { MANTINE_SIZES } from '../../../theme';

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 20,
  lg: 26,
  xl: 34,
};

const getSizes = (props: Omit<ActionIconProps, 'children'>) =>
  MANTINE_SIZES.map((size) => (
    <ActionIcon key={size} size={size} {...props}>
      <ImageIcon style={{ width: iconSizes[size], height: iconSizes[size] }} />
    </ActionIcon>
  ));

function Demo() {
  return <Group position="center">{getSizes({ variant: 'filled', color: 'blue' })}</Group>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
