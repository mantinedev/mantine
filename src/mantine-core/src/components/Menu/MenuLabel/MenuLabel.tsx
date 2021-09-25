import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Text } from '../../Text/Text';

export interface MenuLabelProps extends DefaultProps, React.ComponentPropsWithoutRef<typeof Text> {
  /** Label content */
  children: React.ReactNode;
}

export interface MenuLabelType {
  type: any;
  props: MenuLabelProps;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export function MenuLabel(
  // Props should be kept for ts integration
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: MenuLabelProps
) {
  return null;
}

MenuLabel.displayName = '@mantine/core/MenuLabel';
