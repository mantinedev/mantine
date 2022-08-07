import React from 'react';
import dayjs from 'dayjs';
import { DefaultProps } from '@mantine/core';
import { formatMonthLabel } from './format-month-label/format-month-label';
import { isMonthInRange } from '../MonthPicker/is-month-in-range/is-month-in-range';
import { CalendarHeader, CalendarHeaderStylesNames } from '../CalendarHeader/CalendarHeader';
import { Month, MonthProps, DayKeydownPayload, MonthStylesNames } from '../../Month';

export type MonthsListStylesNames = CalendarHeaderStylesNames | MonthStylesNames;

export interface MonthsListProps
  extends DefaultProps<MonthsListStylesNames>,
    Omit<MonthProps, 'styles' | 'classNames' | 'daysRefs' | 'onDayKeyDown'> {
  amountOfMonths: number;
  paginateBy: number;
  month: Date;
  locale: string;
  allowLevelChange: boolean;
  daysRefs: React.RefObject<HTMLButtonElement[][][]>;
  onMonthChange(month: Date): void;
  onNextLevel(): void;
  onDayKeyDown(
    monthIndex: number,
    payload: DayKeydownPayload,
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void;
  __staticSelector?: string;
  nextMonthLabel?: string;
  previousMonthLabel?: string;
  labelFormat?: string;
  weekdayLabelFormat?: string;
  renderDay?(date: Date): React.ReactNode;
}

export function MonthsList({
  amountOfMonths,
  paginateBy,
  month,
  locale,
  minDate,
  maxDate,
  allowLevelChange,
  size,
  daysRefs,
  onMonthChange,
  onNextLevel,
  onDayKeyDown,
  classNames,
  styles,
  __staticSelector = 'MonthsList',
  nextMonthLabel,
  previousMonthLabel,
  labelFormat,
  weekdayLabelFormat,
  preventFocus,
  renderDay,
  unstyled,
  ...others
}: MonthsListProps) {
  const nextMonth = dayjs(month).add(amountOfMonths, 'months').toDate();
  const previousMonth = dayjs(month).subtract(1, 'months').toDate();

  const months = Array(amountOfMonths)
    .fill(0)
    .map((_, index) => {
      const monthDate = dayjs(month).add(index, 'months').toDate();
      return (
        <div key={index}>
          <CalendarHeader
            hasNext={
              index + 1 === amountOfMonths && isMonthInRange({ date: nextMonth, minDate, maxDate })
            }
            hasPrevious={index === 0 && isMonthInRange({ date: previousMonth, minDate, maxDate })}
            label={formatMonthLabel({ month: monthDate, locale, format: labelFormat })}
            onNext={() => onMonthChange(dayjs(month).add(paginateBy, 'months').toDate())}
            onPrevious={() => onMonthChange(dayjs(month).subtract(paginateBy, 'months').toDate())}
            onNextLevel={onNextLevel}
            nextLevelDisabled={!allowLevelChange}
            size={size}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            nextLabel={nextMonthLabel}
            previousLabel={previousMonthLabel}
            preventLevelFocus={index > 0}
            preventFocus={preventFocus}
            unstyled={unstyled}
          />

          <Month
            month={monthDate}
            daysRefs={daysRefs.current[index]}
            onDayKeyDown={(...args) => onDayKeyDown(index, ...args)}
            size={size}
            minDate={minDate}
            maxDate={maxDate}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            locale={locale}
            focusable={index === 0}
            preventFocus={preventFocus}
            renderDay={renderDay}
            weekdayLabelFormat={weekdayLabelFormat}
            unstyled={unstyled}
            {...others}
          />
        </div>
      );
    });

  return <>{months}</>;
}

MonthsList.displayName = '@mantine/dates/MonthsList';
