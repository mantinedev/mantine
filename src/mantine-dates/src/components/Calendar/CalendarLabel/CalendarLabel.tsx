import React from 'react';
import dayjs from 'dayjs';
import { useMantineTheme, DefaultProps, mergeStyles, Select, Group, Text } from '@mantine/core';
import { getMonthsNames, getYearsRange } from '../../../utils';
import useStyles from './CalendarLabel.styles';

interface CalendarLabelProps extends DefaultProps<typeof useStyles> {
  locale: string;
  withSelect: boolean;
  yearsRange: { from: number; to: number };
  value: Date;
  onChange(value: Date): void;
  labelFormat: string;
}

export function CalendarLabel({
  locale,
  classNames,
  styles,
  withSelect,
  yearsRange,
  value,
  themeOverride,
  labelFormat,
  onChange,
}: CalendarLabelProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'calendar');
  const _styles = mergeStyles(classes, styles);

  return withSelect ? (
    <Group
      spacing={5}
      themeOverride={themeOverride}
      className={classes.selectGroup}
      style={_styles.selectGroup}
    >
      <Select
        className={classes.select}
        style={_styles.select}
        size="xs"
        themeOverride={themeOverride}
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
        className={classes.select}
        style={_styles.select}
        size="xs"
        themeOverride={themeOverride}
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
  ) : (
    <Text className={classes.label} style={_styles.label} size="sm">
      {dayjs(value).format(labelFormat)}
    </Text>
  );
}
