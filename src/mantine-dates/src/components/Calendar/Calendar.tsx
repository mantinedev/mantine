import React from 'react';
import cx from 'clsx';
import dayjs from 'dayjs';
import {
  DefaultProps,
  useMantineTheme,
  mergeStyles,
  Group,
  ActionIcon,
  getSizeValue,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { Month, MonthSettings, MonthStylesNames } from '../Month/Month';
import { ArrowIcon } from './ArrowIcon';
import { CalendarLabel, CalendarLabelStylesNames } from './CalendarLabel/CalendarLabel';
import { sizes as DAY_SIZES } from '../Month/Day/Day.styles';
import useStyles from './Calendar.styles';

export interface CalendarSettings extends MonthSettings {
  /** aria-label for next month arrow button */
  nextMonthLabel?: string;

  /** aria-label for previous month arrow button */
  previousMonthLabel?: string;

  /** Locale used for all labels formatting */
  locale?: string;

  /** Initial selected month */
  initialMonth?: Date;

  /** dayjs label format */
  labelFormat?: string;

  /** Replace calendar label with month and year selects */
  withSelect?: boolean;

  /** Years range for year select */
  yearsRange?: { from: number; to: number };
}

export type CalendarStylesNames =
  | keyof ReturnType<typeof useStyles>
  | Exclude<MonthStylesNames, 'root'>
  | CalendarLabelStylesNames;

interface CalendarProps
  extends DefaultProps<CalendarStylesNames>,
    CalendarSettings,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Current month */
  month?: Date;

  /** Selected date */
  value?: Date;

  /** Called when selected date changes */
  onChange?(value: Date): void;

  /** Called when month changes */
  onMonthChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;
}

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 18,
  xl: 20,
};

export function Calendar({
  className,
  classNames,
  styles,
  style,
  locale = 'en',
  themeOverride,
  nextMonthLabel,
  previousMonthLabel,
  initialMonth,
  month,
  onMonthChange,
  value,
  onChange,
  labelFormat = 'MMMM YYYY',
  withSelect = false,
  yearsRange = { from: 2020, to: 2030 },
  dayClassName,
  dayStyle,
  disableOutsideEvents,
  minDate,
  maxDate,
  excludeDate,
  fullWidth = false,
  size = 'sm',
  __staticSelector = 'calendar',
  ...others
}: CalendarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, fullWidth, size }, classNames as any, __staticSelector);
  const _styles = mergeStyles(classes, styles as any);
  const iconSize = getSizeValue({ size, sizes: iconSizes });
  const iconButtonSize = getSizeValue({ size, sizes: DAY_SIZES });
  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date,
  });

  const nextDisabled = maxDate instanceof Date && dayjs(_month).endOf('month').isAfter(maxDate);
  const previousDisabled =
    minDate instanceof Date && dayjs(_month).startOf('month').isBefore(minDate);

  return (
    <div
      className={cx(classes.calendar, className)}
      style={{ ...style, ..._styles.calendar }}
      {...others}
    >
      <Group
        className={classes.header}
        style={_styles.header}
        position="apart"
        noWrap
        themeOverride={themeOverride}
      >
        <ActionIcon
          aria-label={nextMonthLabel}
          onClick={() => setMonth(dayjs(_month).subtract(1, 'month').toDate())}
          disabled={previousDisabled}
          themeOverride={themeOverride}
          className={classes.control}
          style={_styles.control}
          size={iconButtonSize}
        >
          <ArrowIcon direction="left" width={iconSize} height={iconSize} />
        </ActionIcon>

        <CalendarLabel
          locale={locale}
          classNames={classNames as any}
          styles={styles as any}
          withSelect={withSelect}
          yearsRange={yearsRange}
          value={_month}
          onChange={setMonth}
          labelFormat={labelFormat}
          themeOverride={themeOverride}
          size={size}
          __staticSelector={__staticSelector}
        />

        <ActionIcon
          aria-label={previousMonthLabel}
          onClick={() => setMonth(dayjs(_month).add(1, 'month').toDate())}
          disabled={nextDisabled}
          themeOverride={themeOverride}
          className={classes.control}
          style={_styles.control}
          size={iconButtonSize}
        >
          <ArrowIcon direction="right" width={iconSize} height={iconSize} />
        </ActionIcon>
      </Group>

      <Month
        themeOverride={themeOverride}
        month={_month}
        value={value}
        onChange={onChange}
        dayClassName={dayClassName}
        dayStyle={dayStyle}
        disableOutsideEvents={disableOutsideEvents}
        minDate={minDate}
        maxDate={maxDate}
        excludeDate={excludeDate}
        classNames={classNames as any}
        styles={styles as any}
        fullWidth={fullWidth}
        size={size}
        __staticSelector={__staticSelector}
      />
    </div>
  );
}

Calendar.displayName = '@mantine/dates/Calendar';
