import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { useUncontrolled } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { MonthHeader } from './MonthHeader/MonthHeader';
import { Month, MonthSettings, DayKeydownPayload } from '../Month';
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

  const daysRefs = useRef<HTMLButtonElement[][][]>(
    Array(amountOfMonths)
      .fill(0)
      .map(() => [])
  );
  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date,
  });

  const onDayKeyDown = (
    monthIndex: number,
    payload: DayKeydownPayload,
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    switch (event.code) {
      case 'ArrowDown': {
        if (payload.rowIndex + 1 < daysRefs.current[monthIndex].length) {
          daysRefs.current[monthIndex][payload.rowIndex + 1][payload.cellIndex].focus();
        }
        break;
      }

      case 'ArrowUp': {
        if (payload.rowIndex > 0) {
          daysRefs.current[monthIndex][payload.rowIndex - 1][payload.cellIndex].focus();
        }
        break;
      }

      case 'ArrowRight': {
        if (payload.cellIndex !== 6) {
          daysRefs.current[monthIndex][payload.rowIndex][payload.cellIndex + 1].focus();
        } else if (monthIndex + 1 < amountOfMonths) {
          if (daysRefs.current[monthIndex + 1][payload.rowIndex]) {
            daysRefs.current[monthIndex + 1][payload.rowIndex][0]?.focus();
          }
        }

        break;
      }

      case 'ArrowLeft': {
        if (payload.cellIndex !== 0) {
          daysRefs.current[monthIndex][payload.rowIndex][payload.cellIndex - 1].focus();
        } else if (monthIndex > 0) {
          if (daysRefs.current[monthIndex - 1][payload.rowIndex]) {
            daysRefs.current[monthIndex - 1][payload.rowIndex][6].focus();
          }
        }
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
          daysRefs={daysRefs.current[index]}
          disableOutsideDayStyle={false}
          onDayKeyDown={(...args) => onDayKeyDown(index, ...args)}
        />
      </div>
    ));

  return <div className={classes.calendarBase}>{months}</div>;
}
