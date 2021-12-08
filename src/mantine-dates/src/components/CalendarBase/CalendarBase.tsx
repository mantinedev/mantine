import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useUncontrolled } from '@mantine/hooks';
import { MantineSize } from '@mantine/core';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { Month, MonthSettings, DayKeydownPayload } from '../Month';
import { YearPicker } from './YearPicker/YearPicker';
import { MonthPicker } from './MonthPicker/MonthPicker';
import { formatMonthLabel } from './format-month-label/format-month-label';
import useStyles from './CalendarBase.styles';

export interface CalendarProps extends MonthSettings {
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

  /** Selected value */
  value?: Date;

  /** Called when day is selected */
  onChange?(value: Date): void;

  /** Calendar size */
  size?: MantineSize;

  /** Allow to change level (date – month – year) */
  allowLevelChange?: boolean;

  /** Initial date selection level */
  initialLevel?: 'date' | 'month' | 'year';
}

export function CalendarBase({
  month,
  initialMonth,
  onMonthChange,
  locale,
  amountOfMonths = 1,
  size = 'sm',
  allowLevelChange = true,
  initialLevel = 'date',
  ...others
}: CalendarProps) {
  const { classes, theme } = useStyles({ size, amountOfMonths }, { name: 'CalendarBase' });
  const finalLocale = locale || theme.datesLocale;

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

  const [selectionState, setSelectionState] = useState(initialLevel);
  const [yearSelection, setYearSelection] = useState(_month.getFullYear());

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
    .map((_, index) => {
      const monthDate = dayjs(_month).add(index, 'months').toDate();
      return (
        <div key={index}>
          <CalendarHeader
            hasNext={index + 1 === amountOfMonths}
            hasPrevious={index === 0}
            label={formatMonthLabel({ month: monthDate, locale: finalLocale })}
            onNext={() => setMonth(dayjs(_month).add(amountOfMonths, 'months').toDate())}
            onPrevious={() => setMonth(dayjs(_month).subtract(amountOfMonths, 'months').toDate())}
            onNextOrder={() => setSelectionState('year')}
            nextOrderDisabled={!allowLevelChange}
          />

          <Month
            month={monthDate}
            daysRefs={daysRefs.current[index]}
            onDayKeyDown={(...args) => onDayKeyDown(index, ...args)}
            size={size}
            {...others}
          />
        </div>
      );
    });

  return (
    <div className={classes.calendarBase}>
      {selectionState === 'year' && (
        <YearPicker
          value={yearSelection}
          onChange={(year) => {
            setYearSelection(year);
            setSelectionState('month');
          }}
        />
      )}

      {selectionState === 'month' && (
        <MonthPicker
          value={{ month: _month.getMonth(), year: _month.getFullYear() }}
          year={yearSelection}
          onYearChange={setYearSelection}
          onNextOrder={() => setSelectionState('year')}
          locale={finalLocale}
          onChange={(monthValue) => {
            setMonth(new Date(yearSelection, monthValue, 1));
            setSelectionState('date');
          }}
        />
      )}

      {selectionState === 'date' && months}
    </div>
  );
}
