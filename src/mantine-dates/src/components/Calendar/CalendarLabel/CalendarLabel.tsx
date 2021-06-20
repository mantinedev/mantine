import React from 'react';
import dayjs from 'dayjs';
import { useMantineTheme, DefaultProps, mergeStyles, Select, Group } from '@mantine/core';
import { getMonthsNames, getYearsRange } from '../../../utils';
import useStyles from './CalendarLabel.styles';

interface CalendarLabelProps extends DefaultProps<typeof useStyles> {
  locale: string;
  withMonthPicker: boolean;
  withYearPicker: boolean;
  yearsRange: { from: number; to: number };
  value: Date;
  onChange(value: Date): void;
}

export function CalendarLabel({
  locale,
  classNames,
  styles,
  withMonthPicker,
  withYearPicker,
  yearsRange,
  value,
  onChange,
}: CalendarLabelProps) {
  const theme = useMantineTheme();
  const classes = useStyles({ theme }, classNames, 'calendar-label');
  const _styles = mergeStyles(classes, styles);

  return (
    <div>
      <Group spacing={5}>
        <Select
          value={value.getMonth()}
          onChange={(event) =>
            onChange(dayjs(value).set('month', parseInt(event.currentTarget.value, 10)).toDate())
          }
          data={getMonthsNames(locale).map((month, index) => ({
            label: month,
            value: index.toString(),
          }))}
        />

        <Select
          value={value.getFullYear()}
          onChange={(event) =>
            onChange(dayjs(value).set('year', parseInt(event.currentTarget.value, 10)).toDate())
          }
          data={getYearsRange(yearsRange).map((year) => ({
            label: year.toString(),
            value: year.toString(),
          }))}
        />
      </Group>
    </div>
  );
}
