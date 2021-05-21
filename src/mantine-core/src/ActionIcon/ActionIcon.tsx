import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles, { sizes } from './ActionIcon.styles';

export interface ActionIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  /** Icon rendered inside button */
  children: React.ReactNode;

  /** Controls appearance */
  variant?: 'transparent' | 'hover' | 'filled' | 'outline' | 'light';

  /** Button hover, active and icon colors from theme */
  color?: string;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined icon size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const ACTION_ICON_SIZES = sizes;

export function ActionIcon<T extends React.ElementType = 'button', U = HTMLButtonElement>({
  className,
  color = 'gray',
  children,
  radius = 'sm',
  size = 'md',
  variant = 'hover',
  themeOverride,
  elementRef,
  component: Element = 'button',
  ...others
}: ComponentPassThrough<T, ActionIconProps> & { elementRef?: React.ForwardedRef<U> }) {
  const classes = useStyles({
    size,
    radius,
    color,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <Element
      {...others}
      className={cx(classes.actionIcon, classes[variant], className)}
      type="button"
      ref={elementRef}
    >
      {children}
    </Element>
  );
}

ActionIcon.displayName = '@mantine/core/ActionIcon';
