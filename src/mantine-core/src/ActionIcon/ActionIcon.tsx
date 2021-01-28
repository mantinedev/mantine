import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, Theme } from '@mantine/types';
import classes from './ActionIcon.styles.less';

interface ActionIconProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  theme?: Theme;
}

const ActionIcon = forwardRef(
  (
    { className, theme = 'muted', children, ...others }: ActionIconProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      {...others}
      data-composable
      className={cx(classes.actionIcon, classes[theme], className)}
      type="button"
      ref={ref}
    >
      {children}
    </button>
  )
);

ActionIcon.displayName = '@mantine/core/ActionIcon';

export default ActionIcon;
