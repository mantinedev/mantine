import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles from './ActionIcon.styles';

interface ActionIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  /** icon color from theme */
  color?: string;

  /** icon radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** predefined icon size or number to set width and height in px */
  size?: MantineNumberSize;
}

export const ActionIcon = forwardRef(
  (
    {
      className,
      color = 'gray',
      children,
      radius = 'sm',
      size = 'md',
      themeOverride,
      ...others
    }: ActionIconProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ size, radius, color, theme: useMantineTheme(themeOverride) });

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
