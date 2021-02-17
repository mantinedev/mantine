import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles from './ActionIcon.styles';

interface ActionIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  color?: string;
  radius?: MantineNumberSize;
}

export const ActionIcon = forwardRef(
  (
    { className, color, children, radius = 'sm', themeOverride, ...others }: ActionIconProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ radius, color, theme: useMantineTheme(themeOverride) });

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
