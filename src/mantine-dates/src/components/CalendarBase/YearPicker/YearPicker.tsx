import React, { useState } from 'react';
import { DefaultProps, ClassNames, UnstyledButton, MantineSize } from '@mantine/core';
import { getDecadeRange } from './get-decade-range/get-decade-range';
import { CalendarHeader, CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import useStyles from './YearPicker.styles';

export type YearPickerStylesNames = ClassNames<typeof useStyles> | CalendarHeaderStylesNames;

export interface YearPickerProps
  extends DefaultProps<YearPickerStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value: number;
  onChange(value: number): void;
  minYear?: number;
  maxYear?: number;
  size?: MantineSize;
  __staticSelector?: string;
  nextDecadeLabel?: string;
  previousDecadeLabel?: string;
}

export function YearPicker({
  className,
  styles,
  classNames,
  value,
  onChange,
  size,
  minYear,
  maxYear,
  __staticSelector = 'YearPicker',
  nextDecadeLabel,
  previousDecadeLabel,
  ...others
}: YearPickerProps) {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });
  const [decade, setDecade] = useState(value);
  const range = getDecadeRange(decade);

  const years = range.map((year) => (
    <UnstyledButton
      key={year}
      onClick={() => onChange(year)}
      disabled={year < minYear || year > maxYear}
      className={cx(classes.yearPickerControl, {
        [classes.yearPickerControlActive]: year === value,
      })}
    >
      {year}
    </UnstyledButton>
  ));

  return (
    <div className={cx(classes.yearPicker, className)} {...others}>
      <CalendarHeader
        label={`${range[0]} – ${range[range.length - 1]}`}
        hasPrevious={minYear < range[0]}
        hasNext={maxYear > range[range.length - 1]}
        onNext={() => setDecade((current) => current + 10)}
        onPrevious={() => setDecade((current) => current - 10)}
        nextLevelDisabled
        size={size}
        nextLabel={nextDecadeLabel}
        previousLabel={previousDecadeLabel}
      />
      <div className={classes.yearPickerControls}>{years}</div>
    </div>
  );
}
