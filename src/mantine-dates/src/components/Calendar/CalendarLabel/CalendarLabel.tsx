import React from 'react';
import dayjs from 'dayjs';
import { DefaultProps, NativeSelect, Group, Text, MantineSize, ClassNames } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { getMonthsNames, getYearsRange } from '../../../utils';
import useStyles from './CalendarLabel.styles';

export type CalendarLabelStylesNames = ClassNames<typeof useStyles>;

interface CalendarLabelProps extends DefaultProps<CalendarLabelStylesNames> {
  locale: string;
  withSelect: boolean;
  yearsRange: { from: number; to: number };
  value: Date;
  onChange(value: Date): void;
  labelFormat: string;
  __staticSelector: string;
  size: MantineSize;
  monthLabel?: string;
  yearLabel?: string;
  preventFocus?: boolean;
}

export function CalendarLabel({
  locale,
  classNames,
  styles,
  withSelect,
  yearsRange,
  value,
  labelFormat,
  onChange,
  size,
  __staticSelector,
  monthLabel,
  yearLabel,
  preventFocus,
}: CalendarLabelProps) {
  const selectSize = size === 'lg' || size === 'xl' ? 'md' : 'xs';
  const { classes } = useStyles(null, { classNames, styles, name: __staticSelector });

  return withSelect ? (
    <Group spacing={5} noWrap className={classes.calendarSelectGroup}>
      <NativeSelect
        aria-label={monthLabel}
        className={classes.calendarSelect}
        size={selectSize}
        value={value.getMonth()}
        onMouseDown={(event) => preventFocus && event.preventDefault()}
        onChange={(event) =>
          onChange(dayjs(value).set('month', parseInt(event.currentTarget.value, 10)).toDate())
        }
        data={getMonthsNames(locale).map((month, index) => ({
          label: upperFirst(month),
          value: index.toString(),
        }))}
      />

      <NativeSelect
        aria-label={yearLabel}
        className={classes.calendarSelect}
        size={selectSize}
        value={value.getFullYear()}
        onMouseDown={(event) => preventFocus && event.preventDefault()}
        onChange={(event) =>
          onChange(dayjs(value).set('year', parseInt(event.currentTarget.value, 10)).toDate())
        }
        data={getYearsRange(yearsRange).map((year) => ({
          label: year.toString(),
          value: year.toString(),
        }))}
      />
    </Group>
  ) : (
    <Text className={classes.calendarLabel} size={size}>
      {upperFirst(dayjs(value).locale(locale).format(labelFormat))}
    </Text>
  );
}

CalendarLabel.displayName = '@mantine/dates/CalendarLabel';
