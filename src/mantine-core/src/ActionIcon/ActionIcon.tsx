import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineColor, MantineNumberSize } from '@mantine/theme';
import useStyles from './ActionIcon.styles';

interface ActionIconProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  color?: MantineColor;
  radius?: MantineNumberSize;
}

const ActionIcon = forwardRef(
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

export default ActionIcon;
