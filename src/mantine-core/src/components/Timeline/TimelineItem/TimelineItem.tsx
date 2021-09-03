import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../../theme';
import useStyles from './TimelineItem.styles';

export interface TimelineItemProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function TimelineItem({ className, themeOverride, ...others }: TimelineItemProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return (
    <div className={cx(classes.item, className)} {...others}>
      TimelineItem
    </div>
  );
}

TimelineItem.displayName = '@mantine/core/TimelineItem';
