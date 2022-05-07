import React from 'react';
import { DefaultProps, Selectors, useContextStylesApi } from '@mantine/styles';
import { Text } from '../../Text';
import useStyles from './MenuLabel.styles';

export type MenuLabelStylesName = Selectors<typeof useStyles>;

export interface MenuLabelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Label content */
  children?: React.ReactNode;
}

export function MenuLabel({ children, className, ...others }: MenuLabelProps) {
  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = useStyles(null, { name: 'Menu', classNames, styles, unstyled });
  return (
    <Text className={cx(classes.label, className)} {...others}>
      {children}
    </Text>
  );
}

MenuLabel.displayName = '@mantine/core/MenuLabel';
