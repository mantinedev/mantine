import React from 'react';
import cx from 'clsx';
import { DefaultProps, Theme } from '@mantine/types';
import classes from './ActionIcon.styles.less';

interface ActionIconProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  theme?: Theme;
  children: React.ReactNode;
}

export default function ActionIcon({
  className,
  theme = 'muted',
  children,
  ...others
}: ActionIconProps) {
  return (
    <button {...others} className={cx(classes.actionIcon, classes[theme], className)} type="button">
      {children}
    </button>
  );
}

ActionIcon.displayName = '@mantine/core/ActionIcon';
