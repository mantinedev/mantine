import React from 'react';
import { DefaultProps, ClassNames, UnstyledButton } from '@mantine/core';
import { getMonthsNames } from '../../../utils';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import useStyles from './MonthPicker.styles';

export type MonthPickerStylesNames = ClassNames<typeof useStyles>;

export interface MonthPickerProps
  extends DefaultProps<MonthPickerStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Selected month */
  value: { year: number; month: number };

  /** Called when year changes */
  onChange(value: number): void;

  /** Locale */
  locale: string;

  /** Selected year */
  year: number;

  /** Called when next/previous year is selected */
  onYearChange(year: number): void;

  /** Called when year is pressed */
  onNextOrder(): void;
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
  onNextOrder,
  ...others
}: MonthPickerProps) {
  const { classes, cx } = useStyles();
  const range = getMonthsNames(locale);

  const years = range.map((month, index) => (
    <UnstyledButton
      key={month}
      onClick={() => onChange(index)}
      className={cx(classes.monthPickerControl, {
        [classes.monthPickerControlActive]: index === value.month && year === value.year,
      })}
    >
      {month}
    </UnstyledButton>
  ));

  return (
    <div className={cx(classes.monthPicker, className)} {...others}>
      <CalendarHeader
        label={year.toString()}
        hasNext
        hasPrevious
        onNext={() => onYearChange(year + 1)}
        onPrevious={() => onYearChange(year - 1)}
        onNextOrder={onNextOrder}
      />
      <div className={classes.monthPickerControls}>{years}</div>
    </div>
  );
}
