import React from 'react';
import { DefaultProps, ClassNames, UnstyledButton, MantineSize } from '@mantine/core';
import { getMonthsNames } from '../../../utils';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import useStyles from './MonthPicker.styles';

export type MonthPickerStylesNames = ClassNames<typeof useStyles>;

export interface MonthPickerProps
  extends DefaultProps<MonthPickerStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value: { year: number; month: number };
  onChange(value: number): void;
  locale: string;
  year: number;
  onYearChange(year: number): void;
  onNextLevel(): void;
  size?: MantineSize;
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
  ...others
}: MonthPickerProps) {
  const { classes, cx } = useStyles({ size });
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
        onNextLevel={onNextLevel}
        size={size}
      />
      <div className={classes.monthPickerControls}>{years}</div>
    </div>
  );
}
