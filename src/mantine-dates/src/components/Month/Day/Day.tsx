import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineSize, mergeStyles, useMantineTheme } from '@mantine/core';
import useStyles from './Day.styles';

export type DayStylesNames = keyof ReturnType<typeof useStyles>;

export interface DayProps
  extends DefaultProps<DayStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onKeyDown' | 'onMouseEnter'> {
  value: Date;
  selected: boolean;
  weekend: boolean;
  outside: boolean;
  onClick?(): void;
  elementRef(ref: HTMLButtonElement): void;
  onKeyDown(date: Date, event: React.KeyboardEvent): void;
  onMouseEnter(date: Date, event: React.MouseEvent): void;
  disabled: boolean;
  hasValue: boolean;
  range: boolean;
  firstInRange: boolean;
  lastInRange: boolean;
  size: MantineSize;
  __staticSelector?: string;
}

export function Day({
  className,
  style,
  value,
  selected,
  weekend,
  outside,
  onClick,
  elementRef,
  onKeyDown,
  onMouseEnter,
  themeOverride,
  classNames,
  disabled,
  styles,
  hasValue,
  firstInRange,
  lastInRange,
  __staticSelector = 'month',
  range,
  size,
  ...others
}: DayProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);

  return (
    <button
      {...others}
      type="button"
      onClick={onClick}
      ref={elementRef}
      onKeyDown={(event) => onKeyDown(value, event)}
      onMouseEnter={(event) => onMouseEnter(value, event)}
      tabIndex={hasValue ? (selected ? 0 : -1) : 0}
      style={{
        ..._styles.day,
        ...(outside ? _styles.outside : null),
        ...(weekend ? _styles.weekend : null),
        ...(selected ? _styles.selected : null),
        ...(range ? _styles.range : null),
        ...(firstInRange ? _styles.firstInRange : null),
        ...(lastInRange ? _styles.lastInRange : null),
        ...style,
      }}
      disabled={disabled}
      className={cx(
        classes.day,
        {
          [classes.outside]: outside,
          [classes.weekend]: weekend,
          [classes.selected]: selected,
          [classes.range]: range,
          [classes.firstInRange]: firstInRange,
          [classes.lastInRange]: lastInRange,
        },
        className
      )}
    >
      {value.getDate()}
    </button>
  );
}

Day.displayName = '@mantine/core/Day';
