import React from 'react';
import { ImageIcon } from '@modulz/radix-icons';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { Group } from '../../Group/Group';
import { MANTINE_SIZES } from '../../../theme';

const getSizes = (props: Omit<ActionIconProps, 'children'>) =>
  MANTINE_SIZES.map((size) => (
    <ActionIcon key={size} radius={size} {...props}>
      <ImageIcon style={{ width: 18, height: 18 }} />
    </ActionIcon>
  ));

function Demo() {
  return (
    <Group position="center">{getSizes({ variant: 'outline', color: 'blue', size: 'lg' })}</Group>
  );
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
};
