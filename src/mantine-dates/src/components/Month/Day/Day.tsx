import React from 'react';
import cx from 'clsx';
import { DefaultProps, mergeStyles, useMantineTheme } from '@mantine/core';
import useStyles from './Day.styles';

export interface DayProps extends DefaultProps<typeof useStyles> {
  value: Date;
  selected: boolean;
  weekend: boolean;
  outside: boolean;
  onClick?(): void;
  elementRef(ref: HTMLButtonElement): void;
  onKeyDown(date: Date, event: React.KeyboardEvent): void;
  disabled: boolean;
  hasValue: boolean;
}

export default function Day({
  className,
  style,
  value,
  selected,
  weekend,
  outside,
  onClick,
  elementRef,
  onKeyDown,
  themeOverride,
  classNames,
  disabled,
  styles,
  hasValue,
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
      tabIndex={hasValue ? (selected ? 0 : -1) : 0}
      style={{ ..._styles.day, ...style }}
      disabled={disabled}
      className={cx(
        classes.day,
        {
          [classes.outside]: outside,
          [classes.weekend]: weekend,
          [classes.selected]: selected,
        },
        className
      )}
    >
      {value.getDate()}
    </button>
  );
}

Day.displayName = '@mantine/core/Day';
