import React from 'react';
import cx from 'clsx';
import { DefaultProps, mergeStyles, useMantineTheme } from '@mantine/core';
import useStyles from './Day.styles';

export interface DayProps extends DefaultProps<typeof useStyles> {
  value: Date;
  selected: boolean;
  outside: boolean;
  weekend: boolean;
  disableOutsideEvents: boolean;
  onClick?(): void;
  elementRef(ref: HTMLButtonElement): void;
  onKeyDown(date: Date, event: React.KeyboardEvent): void;
}

export default function Day({
  className,
  value,
  selected,
  outside,
  weekend,
  onClick,
  elementRef,
  onKeyDown,
  disableOutsideEvents,
  themeOverride,
  classNames,
  styles,
}: DayProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'month');
  const _styles = mergeStyles(classes, styles);

  return (
    <button
      type="button"
      onClick={onClick}
      ref={elementRef}
      onKeyDown={(event) => onKeyDown(value, event)}
      tabIndex={outside && disableOutsideEvents ? -1 : selected ? 0 : -1}
      style={_styles.day}
      className={cx(
        classes.day,
        {
          [classes.outside]: outside,
          [classes.weekend]: weekend,
          [classes.selected]: selected,
          [classes.disableOutsideEvents]: disableOutsideEvents,
        },
        className
      )}
    >
      {value.getDate()}
    </button>
  );
}

Day.displayName = '@mantine/core/Day';
