import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Text } from '../../Text';
import useStyles from './MenuLabel.styles';

export interface MenuLabelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Label content */
  children?: React.ReactNode;
}

export function MenuLabel({ children, className, ...others }: MenuLabelProps) {
  const { classes, cx } = useStyles();
  return (
    <Text className={cx(classes.label, className)} {...others}>
      {children}
    </Text>
  );
}

MenuLabel.displayName = '@mantine/core/MenuLabel';
