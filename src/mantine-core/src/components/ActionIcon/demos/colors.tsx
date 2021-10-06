import React from 'react';
import { ImageIcon } from '@modulz/radix-icons';
import { MANTINE_COLORS } from '@mantine/styles';
import { Group } from '../../Group/Group';
import { ActionIcon, ActionIconProps } from '../ActionIcon';

const getColors = (props: Omit<ActionIconProps<'button'>, 'children'>) =>
  MANTINE_COLORS.slice(1).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <ImageIcon style={{ width: 16, height: 16 }} />
    </ActionIcon>
  ));

function Demo() {
  return (
    <>
      <Group position="center">{getColors({ variant: 'hover' })}</Group>
      <Group position="center">{getColors({ variant: 'outline' })}</Group>
      <Group position="center">{getColors({ variant: 'light' })}</Group>
      <Group position="center">{getColors({ variant: 'filled' })}</Group>
    </>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  component: Demo,
};
