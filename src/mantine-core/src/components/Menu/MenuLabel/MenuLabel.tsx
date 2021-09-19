import React from 'react';
import { Text } from '../../Text/Text';
import { DefaultProps } from '@mantine/theme';

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
