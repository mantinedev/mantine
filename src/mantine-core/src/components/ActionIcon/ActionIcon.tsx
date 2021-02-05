import React, { forwardRef } from 'react';
import { useTheme } from 'react-jss';
import cx from 'clsx';
import { DefaultProps, Theme } from '@mantine/types';
import useStyles from './ActionIcon.styles';

interface ActionIconProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  theme?: Theme;
}

const ActionIcon = forwardRef(
  (
    { className, theme = 'muted', children, ...others }: ActionIconProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = useStyles({ theme: useTheme() });

    return (
      <button
        {...others}
        data-composable
        className={cx(classes.actionIcon, classes[theme], className)}
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
