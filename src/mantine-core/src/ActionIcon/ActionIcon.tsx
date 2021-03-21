import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes, ActionIconVariant } from './ActionIcon.styles';

interface ActionIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  /** Icon rendered inside button */
  children: React.ReactNode;

  /** Controls appearance */
  variant?: ActionIconVariant;

  /** Button hover, active and icon colors from theme */
  color?: string;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined icon size or number to set width and height in px */
  size?: MantineNumberSize;
}

export const ACTION_ICON_SIZES = sizes;

export const ActionIcon = forwardRef(
  (
    {
      className,
      color = 'gray',
      children,
      radius = 'sm',
      size = 'md',
      variant = 'hover',
      themeOverride,
      ...others
    }: ActionIconProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({
      variant,
      size,
      radius,
      color,
      theme: useMantineTheme(themeOverride),
    });

    return (
      <button
        {...others}
        data-mantine-composable
        className={cx(classes.actionIcon, className)}
        type="button"
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

ActionIcon.displayName = '@mantine/core/ActionIcon';
