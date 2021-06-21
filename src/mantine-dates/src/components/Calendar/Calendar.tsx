import React from 'react';
import cx from 'clsx';
import dayjs from 'dayjs';
import { DefaultProps, useMantineTheme, mergeStyles, Group, ActionIcon } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { Month, MonthSettings } from '../Month/Month';
import { ArrowIcon } from './ArrowIcon';
import { CalendarLabel } from './CalendarLabel/CalendarLabel';
import useStyles from './Calendar.styles';

export interface CalendarSettings {
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

interface CalendarProps
  extends DefaultProps<typeof useStyles>,
    MonthSettings,
    CalendarSettings,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  month?: Date;
  value?: Date;
  onChange?(value: Date): void;
  onMonthChange?(value: Date): void;
}

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
}: CalendarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'calendar');
  const _styles = mergeStyles(classes, styles);
  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date,
  });

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }}>
      <Group className={classes.header} position="apart">
        <ActionIcon
          aria-label={nextMonthLabel}
          onClick={() => setMonth(dayjs(_month).subtract(1, 'month').toDate())}
        >
          <ArrowIcon direction="left" width={14} height={14} />
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
        />

        <ActionIcon
          aria-label={previousMonthLabel}
          onClick={() => setMonth(dayjs(_month).add(1, 'month').toDate())}
        >
          <ArrowIcon direction="right" width={14} height={14} />
        </ActionIcon>
      </Group>

      <Month
        month={_month}
        value={value}
        onChange={onChange}
        dayClassName={dayClassName}
        dayStyle={dayStyle}
        disableOutsideEvents={disableOutsideEvents}
      />
    </div>
  );
}

Calendar.displayName = '@mantine/dates/Calendar';
