import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { useUncontrolled } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { MonthHeader } from './MonthHeader/MonthHeader';
import { Month, MonthSettings } from '../Month';
import { DayModifiers } from '../Month/get-day-props/get-day-props';
import useStyles from './CalendarBase.styles';

interface CalendarProps extends MonthSettings {
  /** Month for controlled calendar */
  month?: Date;

  /** Initial month for uncontrolled calendar */
  initialMonth?: Date;

  /** Called when month changes */
  onMonthChange?(month: Date): void;

  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale?: string;

  /** dayjs label format */
  labelFormat?: string;

  /** Amount of months */
  amountOfMonths?: number;
}

export function CalendarBase({
  month,
  initialMonth,
  onMonthChange,
  locale,
  labelFormat = 'MMMM YYYY',
  amountOfMonths = 3,
  dayStyle,
}: CalendarProps) {
  const theme = useMantineTheme();
  const finalLocale = locale || theme.datesLocale;
  const { classes } = useStyles();

  const daysRefs = useRef<Record<string, HTMLButtonElement>>({});
  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date,
  });

  const dayStyles = (date: Date, modifiers: DayModifiers) => {
    const initialStyles = typeof dayStyle === 'function' ? dayStyle(date, modifiers) : null;
    const outsideStyles = modifiers.outside && amountOfMonths > 1 ? { display: 'none' } : null;
    return { ...initialStyles, ...outsideStyles };
  };

  const months = Array(amountOfMonths)
    .fill(0)
    .map((_, index) => (
      <div key={index}>
        <MonthHeader
          hasNext={index + 1 === amountOfMonths}
          hasPrevious={index === 0}
          month={dayjs(_month).add(index, 'months').toDate()}
          locale={finalLocale}
          labelFormat={labelFormat}
          onNextMonth={() => setMonth(dayjs(_month).add(1, 'months').toDate())}
          onPreviousMonth={() => setMonth(dayjs(_month).subtract(1, 'months').toDate())}
        />
        <Month
          month={dayjs(_month).add(index, 'months').toDate()}
          daysRefs={daysRefs}
          disableOutsideDayStyle={false}
          dayStyle={dayStyles}
        />
      </div>
    ));

  return <div className={classes.calendarBase}>{months}</div>;
}
