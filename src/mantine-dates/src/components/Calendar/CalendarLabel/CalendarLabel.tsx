import React from 'react';
import dayjs from 'dayjs';
import {
  useMantineTheme,
  DefaultProps,
  mergeStyles,
  NativeSelect,
  Group,
  Text,
  MantineSize,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { getMonthsNames, getYearsRange } from '../../../utils';
import useStyles from './CalendarLabel.styles';

export type CalendarLabelStylesNames = keyof ReturnType<typeof useStyles>;

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
  size,
  __staticSelector,
  monthLabel,
  yearLabel,
}: CalendarLabelProps) {
  const theme = useMantineTheme(themeOverride);
  const selectSize = size === 'lg' || size === 'xl' ? 'md' : 'xs';
  const classes = useStyles({ theme }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);

  return withSelect ? (
    <Group
      spacing={5}
      noWrap
      themeOverride={themeOverride}
      className={classes.selectGroup}
      style={_styles.selectGroup}
    >
      <NativeSelect
        aria-label={monthLabel}
        className={classes.select}
        style={_styles.select}
        size={selectSize}
        themeOverride={themeOverride}
        value={value.getMonth()}
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
        className={classes.select}
        style={_styles.select}
        size={selectSize}
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
    <Text className={classes.label} style={_styles.label} size={size}>
      {upperFirst(dayjs(value).locale(locale).format(labelFormat))}
    </Text>
  );
}

CalendarLabel.displayName = '@mantine/dates/CalendarLabel';
