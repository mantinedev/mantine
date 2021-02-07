import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineColor } from '@mantine/theme';
import useStyles from './ActionIcon.styles';

interface ActionIconProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  color?: MantineColor;
}

const ActionIcon = forwardRef(
  (
    { className, color, children, themeOverride, ...others }: ActionIconProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

    return (
      <button
        {...others}
        data-composable
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
