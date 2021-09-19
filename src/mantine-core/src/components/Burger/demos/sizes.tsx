import React from 'react';
import { MANTINE_SIZES } from '@mantine/theme';
import { WrappedBurger } from './WrappedBurger';
import { Group } from '../../Group/Group';

const items = MANTINE_SIZES.map((size) => <WrappedBurger size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
