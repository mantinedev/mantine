import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { UnstyledButton } from '../UnstyledButton';
import useStyles, { BurgerStylesParams } from './Burger.styles';

export type BurgerStylesNames = Selectors<typeof useStyles>;

export interface BurgerProps
  extends DefaultProps<BurgerStylesNames, BurgerStylesParams>,
    React.ComponentPropsWithoutRef<'button'> {
  variant?: string;

  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
  color?: string;

  /** Predefined burger size or number to set width and height */
  size?: MantineNumberSize;

  /** Transition duration in ms */
  transitionDuration?: number;
}

const defaultProps: Partial<BurgerProps> = {
  size: 'md',
  transitionDuration: 300,
};

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>((props: BurgerProps, ref) => {
  const {
    className,
    opened,
    color,
    size,
    classNames,
    styles,
    transitionDuration,
    variant,
    ...others
  } = useComponentDefaultProps('Burger', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, transitionDuration },
    { classNames, styles, name: 'Burger', variant, size }
  );

  return (
    <UnstyledButton className={cx(classes.root, className)} ref={ref} {...others}>
      <div data-opened={opened || undefined} className={classes.burger} />
    </UnstyledButton>
  );
});

Burger.displayName = '@mantine/core/Burger';
