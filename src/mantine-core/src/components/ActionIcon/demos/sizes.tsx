import React from 'react';
import { ImageIcon } from '@modulz/radix-icons';
import { MANTINE_SIZES } from '@mantine/styles';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

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

const getRadius = (props: Omit<ActionIconProps, 'children'>) =>
  MANTINE_SIZES.map((size) => (
    <ActionIcon key={size} radius={size} {...props}>
      <ImageIcon style={{ width: 14, height: 14 }} />
    </ActionIcon>
  ));

function Demo() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text size="lg" style={{ marginBottom: 20 }}>
          Predefined sizes from xs to xl:
        </Text>
        <Group position="center">{getSizes({ variant: 'filled', color: 'blue' })}</Group>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}
      >
        <Text size="lg" style={{ marginBottom: 20 }}>
          Theme radius from xs to xl:
        </Text>
        <Group position="center">{getRadius({ color: 'blue', variant: 'outline' })}</Group>
      </div>
    </>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
