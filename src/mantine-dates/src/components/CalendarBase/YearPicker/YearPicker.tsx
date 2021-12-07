import React from 'react';
import { DefaultProps, ClassNames, UnstyledButton } from '@mantine/core';
import { getDecadeRange } from './get-decade-range/get-decade-range';
import useStyles from './YearPicker.styles';

export type YearPickerStylesNames = ClassNames<typeof useStyles>;

export interface YearPickerProps
  extends DefaultProps<YearPickerStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Selected year */
  value: number;

  /** Called when year changes */
  onChange(value: number): void;

  /** Active decade */
  decade: number;
}

export function YearPicker({
  className,
  styles,
  classNames,
  value,
  onChange,
  decade,
  ...others
}: YearPickerProps) {
  const { classes, cx } = useStyles();
  const range = getDecadeRange(decade);

  const years = range.map((year) => (
    <UnstyledButton
      key={year}
      onClick={() => onChange(year)}
      className={cx(classes.yearPickerControl, {
        [classes.yearPickerControlActive]: year === value,
      })}
    >
      {year}
    </UnstyledButton>
  ));

  return (
    <div className={cx(classes.yearPicker, className)} {...others}>
      {years}
    </div>
  );
}
