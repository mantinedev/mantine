import React from 'react';
import { ClassNames, DefaultProps } from '@mantine/styles';
import { SharedTextProps, Text } from '../../Text/Text';
import { useMenuContext } from '../Menu.context';
import useStyles from './MenuLabel.styles';

export type MenuLabelStylesNames = ClassNames<typeof useStyles>;

export interface MenuLabelProps
  extends DefaultProps,
    SharedTextProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> {
  /** Label content */
  children: React.ReactNode;
}

export interface MenuLabelType {
  type: any;
  props: MenuLabelProps;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export function MenuLabel(props: MenuLabelProps) {
  const { classNames, styles } = useMenuContext('Label');
  const { classes } = useStyles(null, { name: 'Menu', classNames, styles });
  return <Text className={classes.label} {...props} />;
}

MenuLabel.displayName = '@mantine/core/MenuLabel';
