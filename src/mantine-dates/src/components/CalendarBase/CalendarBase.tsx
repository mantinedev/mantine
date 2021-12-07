import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { useUncontrolled } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { MonthHeader } from './MonthHeader/MonthHeader';
import { Month, MonthSettings } from '../Month';
import { getNextRowDate, isSameMonth } from '../../utils';
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
  amountOfMonths = 1,
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

  const onDayKeyDown = (date: Date, event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.code) {
      case 'ArrowRight': {
        const { shouldFocus, nextDate } = getNextRowDate(
          date,
          isSameMonth(
            dayjs(_month)
              .add(amountOfMonths - 1, 'months')
              .toDate(),
            date
          ),
          'monday'
        );
        const nextDateId = nextDate.toISOString();

        if (nextDateId in daysRefs.current && shouldFocus) {
          daysRefs.current[nextDateId].focus();
        }
        break;
      }

      case 'ArrowDown': {
        const nextDateId = dayjs(date).add(1, 'week').toISOString();
        if (nextDateId in daysRefs.current) {
          daysRefs.current[nextDateId].focus();
        }
        break;
      }
      case 'ArrowUp': {
        const nextDateId = dayjs(date).subtract(1, 'week').toISOString();
        if (nextDateId in daysRefs.current) {
          daysRefs.current[nextDateId].focus();
        }
        break;
      }
    }
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
          onDayKeyDown={onDayKeyDown}
        />
      </div>
    ));

  return <div className={classes.calendarBase}>{months}</div>;
}
