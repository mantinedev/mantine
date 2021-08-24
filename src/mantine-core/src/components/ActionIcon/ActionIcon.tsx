import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '../../theme';
import useStyles, { sizes } from './ActionIcon.styles';

export const ACTION_ICON_SIZES = sizes;

interface _ActionIconProps<C extends React.ElementType, R extends HTMLElement>
  extends DefaultProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

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
}

export type ActionIconProps<C extends React.ElementType, R extends HTMLElement> = _ActionIconProps<
  C,
  R
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof _ActionIconProps<C, R>>;

export function ActionIcon<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>({
  className,
  color = 'gray',
  children,
  radius = 'sm',
  size = 'md',
  variant = 'hover',
  themeOverride,
  elementRef,
  component,
  ...others
}: ActionIconProps<C, R>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ size, radius, color, theme }, null, 'action-icon');
  const Element = component || 'button';

  return (
    <Element
      {...others}
      className={cx(classes.root, classes[variant], className)}
      type="button"
      ref={elementRef as any}
    >
      {children}
    </Element>
  );
}

ActionIcon.displayName = '@mantine/core/ActionIcon';
