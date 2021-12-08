import React from 'react';
import { DefaultProps, ClassNames, UnstyledButton, MantineSize } from '@mantine/core';
import { getMonthsNames } from '../../../utils';
import { CalendarHeader, CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import { isMonthInRange } from './is-month-in-range/is-month-in-range';
import useStyles from './MonthPicker.styles';

export type MonthPickerStylesNames = ClassNames<typeof useStyles> | CalendarHeaderStylesNames;

export interface MonthPickerProps
  extends DefaultProps<MonthPickerStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value: { year: number; month: number };
  onChange(value: number): void;
  locale: string;
  year: number;
  onYearChange(year: number): void;
  onNextLevel(): void;
  minYear?: number;
  maxYear?: number;
  size?: MantineSize;
  minDate?: Date;
  maxDate?: Date;
  __staticSelector?: string;
}

export function MonthPicker({
  className,
  styles,
  classNames,
  value,
  onChange,
  locale,
  year,
  onYearChange,
  onNextLevel,
  size,
  maxYear,
  minYear,
  minDate,
  maxDate,
  __staticSelector = 'MonthPicker',
  ...others
}: MonthPickerProps) {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });
  const range = getMonthsNames(locale);

  const months = range.map((month, index) => (
    <UnstyledButton
      key={month}
      onClick={() => onChange(index)}
      className={cx(classes.monthPickerControl, {
        [classes.monthPickerControlActive]: index === value.month && year === value.year,
      })}
      disabled={!isMonthInRange({ date: new Date(year, index), minDate, maxDate })}
    >
      {month}
    </UnstyledButton>
  ));

  return (
    <div className={cx(classes.monthPicker, className)} {...others}>
      <CalendarHeader
        label={year.toString()}
        hasNext={year < maxYear}
        hasPrevious={year > minYear}
        onNext={() => onYearChange(year + 1)}
        onPrevious={() => onYearChange(year - 1)}
        onNextLevel={onNextLevel}
        size={size}
        classNames={classNames}
        styles={styles}
        __staticSelector={__staticSelector}
      />
      <div className={classes.monthPickerControls}>{months}</div>
    </div>
  );
}
