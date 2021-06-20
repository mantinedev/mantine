import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '@mantine/core';
import useStyles from './Calendar.styles';

interface CalendarProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {}

export function Calendar({ className, classNames, styles, style, themeOverride }: CalendarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'calendar');
  const _styles = mergeStyles(classes, styles);

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }}>
      Calendar
    </div>
  );
}

Calendar.displayName = '@mantine/dates/Calendar';
