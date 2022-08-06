import React, { useState } from 'react';
import { DefaultProps, Selectors, UnstyledButton, MantineSize } from '@mantine/core';
import { getDecadeRange } from './get-decade-range/get-decade-range';
import { CalendarHeader, CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import { formatYear } from '../format-year';
import useStyles from './YearPicker.styles';

export type YearPickerStylesNames = Selectors<typeof useStyles> | CalendarHeaderStylesNames;

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
  preventFocus?: boolean;
  yearLabelFormat?: string;
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
  preventFocus,
  unstyled,
  yearLabelFormat = 'YYYY',
  ...others
}: YearPickerProps) {
  const { classes, cx } = useStyles(
    { size },
    { classNames, styles, unstyled, name: __staticSelector }
  );
  const [decade, setDecade] = useState(value);
  const range = getDecadeRange(decade);

  const years = range.map((year) => (
    <UnstyledButton<'button'>
      key={year}
      unstyled={unstyled}
      onClick={() => onChange(year)}
      disabled={year < minYear || year > maxYear}
      onMouseDown={(event) => preventFocus && event.preventDefault()}
      className={cx(classes.yearPickerControl, {
        [classes.yearPickerControlActive]: year === value,
      })}
    >
      {formatYear(year, yearLabelFormat)}
    </UnstyledButton>
  ));

  return (
    <div className={cx(classes.yearPicker, className)} {...others}>
      <CalendarHeader
        unstyled={unstyled}
        label={`${formatYear(range[0], yearLabelFormat)} – ${formatYear(
          range[range.length - 1],
          yearLabelFormat
        )}`}
        hasPrevious={typeof minYear === 'number' ? minYear < range[0] : true}
        hasNext={typeof maxYear === 'number' ? maxYear > range[range.length - 1] : true}
        onNext={() => setDecade((current) => current + 10)}
        onPrevious={() => setDecade((current) => current - 10)}
        nextLevelDisabled
        size={size}
        nextLabel={nextDecadeLabel}
        previousLabel={previousDecadeLabel}
        styles={styles}
        classNames={classNames}
        __staticSelector={__staticSelector}
        preventFocus={preventFocus}
      />
      <div className={classes.yearPickerControls}>{years}</div>
    </div>
  );
}

YearPicker.displayName = '@mantine/dates/YearPicker';
