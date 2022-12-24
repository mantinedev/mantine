import React, { useRef, useState, forwardRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { Box, MantineSize, Selectors, DefaultProps } from '@mantine/core';
import { MonthSettings, DayKeydownPayload } from '../Month';
import { YearPicker, YearPickerStylesNames } from './YearPicker/YearPicker';
import { MonthPicker, MonthPickerStylesNames } from './MonthPicker/MonthPicker';
import { MonthsList, MonthsListStylesNames } from './MonthsList/MonthsList';
import useStyles from './CalendarBase.styles';

export type CalendarBaseStylesNames =
  | Selectors<typeof useStyles>
  | YearPickerStylesNames
  | MonthPickerStylesNames
  | MonthsListStylesNames;

export interface CalendarSharedProps extends DefaultProps<CalendarBaseStylesNames>, MonthSettings {
  /** Month for controlled calendar */
  month?: Date;

  /** Initial month for uncontrolled calendar */
  initialMonth?: Date;

  /** Called when month changes */
  onMonthChange?(month: Date): void;

  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale?: string;

  /** Amount of months */
  amountOfMonths?: number;

  /** Paginate by amount of months */
  paginateBy?: number;

  /** Selected value */
  value?: Date | Date[] | null;

  /** Calendar size */
  size?: MantineSize;

  /** Allow to change level (date – month – year) */
  allowLevelChange?: boolean;

  /** Allow to change level (date – month – year) */
  allowedLevels?: ('date' | 'month' | 'year')[];

  /** Initial date selection level */
  initialLevel?: 'date' | 'month' | 'year';

  /** Static selector base */
  __staticSelector?: string;

  /** Selected range */
  range?: [Date, Date];

  /** Render day based on the date */
  renderDay?(date: Date): React.ReactNode;

  /** Called when day is selected */
  onChange?(value: Date | Date[]): void;

  /** Called when onMouseEnter event fired on day button */
  onDayMouseEnter?(date: Date, event: React.MouseEvent): void;

  /** Next month control aria-label */
  nextMonthLabel?: string;

  /** Previous month control aria-label */
  previousMonthLabel?: string;

  /** Next year control aria-label */
  nextYearLabel?: string;

  /** Previous year control aria-label */
  previousYearLabel?: string;

  /** Next decade control aria-label */
  nextDecadeLabel?: string;

  /** Previous decade control aria-label */
  previousDecadeLabel?: string;

  /** dayjs Calendar month label format */
  labelFormat?: string;

  /** dayjs Calendar year label format */
  yearLabelFormat?: string;

  /** dayjs label format for weekday heading */
  weekdayLabelFormat?: string;
}

export interface CalendarBaseProps
  extends CalendarSharedProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {}

export const CalendarBase = forwardRef<HTMLDivElement, CalendarBaseProps>(
  (
    {
      className,
      classNames,
      styles,
      month,
      initialMonth,
      onMonthChange,
      locale,
      amountOfMonths = 1,
      paginateBy = amountOfMonths,
      size = 'sm',
      allowedLevels = ['date', 'month', 'year'],
      allowLevelChange = true,
      initialLevel = 'date',
      minDate,
      maxDate,
      __staticSelector = 'CalendarBase',
      dayClassName,
      dayStyle,
      disableOutsideEvents,
      excludeDate,
      hideWeekdays,
      fullWidth,
      preventFocus,
      firstDayOfWeek = 'monday',
      value,
      onChange,
      onDayMouseEnter,
      range,
      nextDecadeLabel,
      nextMonthLabel,
      nextYearLabel,
      previousDecadeLabel,
      previousMonthLabel,
      previousYearLabel,
      labelFormat = 'MMMM YYYY',
      weekdayLabelFormat,
      hideOutsideDates,
      isDateInRange,
      isDateFirstInRange,
      isDateLastInRange,
      renderDay,
      unstyled,
      weekendDays,
      __stopPropagation,
      yearLabelFormat = 'YYYY',
      ...others
    }: CalendarBaseProps,
    ref
  ) => {
    const [selectionState, setSelectionState] = useState(initialLevel);
    const { classes, cx, theme } = useStyles(
      { size, fullWidth, amountOfMonths: selectionState === 'date' ? amountOfMonths : 1 },
      { name: __staticSelector, styles, classNames, unstyled }
    );
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
    });

    const [yearSelection, setYearSelection] = useState(_month.getFullYear());
    const minYear = minDate instanceof Date ? minDate.getFullYear() : 100;
    const maxYear = maxDate instanceof Date ? maxDate.getFullYear() : 10000;

    const daysPerRow = 6;

    const focusOnNextFocusableDay = (
      direction: 'down' | 'up' | 'left' | 'right',
      monthIndex: number,
      payload: DayKeydownPayload,
      n = 1
    ) => {
      const changeRow = ['down', 'up'].includes(direction);

      const rowIndex = changeRow
        ? payload.rowIndex + (direction === 'down' ? n : -n)
        : payload.rowIndex;

      const cellIndex = changeRow
        ? payload.cellIndex
        : payload.cellIndex + (direction === 'right' ? n : -n);

      const dayToFocus = daysRefs.current[monthIndex][rowIndex]?.[cellIndex];

      if (!dayToFocus) {
        return;
      }

      if (dayToFocus.disabled) {
        // Day is disabled, call this function recursively until
        // we find a non-disabled day or there are no more days
        focusOnNextFocusableDay(direction, monthIndex, payload, n + 1);
      } else {
        dayToFocus.focus();
      }
    };

    const handleDayKeyDown = (
      monthIndex: number,
      payload: DayKeydownPayload,
      event: React.KeyboardEvent<HTMLButtonElement>
    ) => {
      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();

          const hasRowBelow = payload.rowIndex + 1 < daysRefs.current[monthIndex].length;
          if (hasRowBelow) {
            focusOnNextFocusableDay('down', monthIndex, payload);
          }
          break;
        }

        case 'ArrowUp': {
          event.preventDefault();

          const hasRowAbove = payload.rowIndex > 0;
          if (hasRowAbove) {
            focusOnNextFocusableDay('up', monthIndex, payload);
          }
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();

          const isNotLastCell = payload.cellIndex !== daysPerRow;
          if (isNotLastCell) {
            focusOnNextFocusableDay('right', monthIndex, payload);
          } else if (monthIndex + 1 < amountOfMonths) {
            if (daysRefs.current[monthIndex + 1][payload.rowIndex]) {
              daysRefs.current[monthIndex + 1][payload.rowIndex][0]?.focus();
            }
          }

          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();

          if (payload.cellIndex !== 0) {
            focusOnNextFocusableDay('left', monthIndex, payload);
          } else if (monthIndex > 0) {
            if (daysRefs.current[monthIndex - 1][payload.rowIndex]) {
              daysRefs.current[monthIndex - 1][payload.rowIndex][daysPerRow].focus();
            }
          }
        }
      }
    };

    return (
      <Box className={cx(classes.calendarBase, className)} ref={ref} {...others}>
        {selectionState === 'year' && allowedLevels.includes('year') && (
          <YearPicker
            size={size}
            value={yearSelection}
            minYear={minYear}
            maxYear={maxYear}
            onChange={(year) => {
              setYearSelection(year);

              if (allowedLevels.includes('month')) {
                setSelectionState('month');
              } else {
                onChange?.(new Date(year, 1, 1));
              }
            }}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            __stopPropagation={__stopPropagation}
            nextDecadeLabel={nextDecadeLabel}
            previousDecadeLabel={previousDecadeLabel}
            preventFocus={preventFocus}
            unstyled={unstyled}
            yearLabelFormat={yearLabelFormat}
          />
        )}

        {selectionState === 'month' && allowedLevels.includes('month') && (
          <MonthPicker
            size={size}
            value={{ month: _month.getMonth(), year: _month.getFullYear() }}
            year={yearSelection}
            onYearChange={setYearSelection}
            onNextLevel={() => {
              if (allowedLevels.includes('year')) {
                setSelectionState('year');
              }
            }}
            locale={finalLocale}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(monthValue) => {
              setMonth(new Date(yearSelection, monthValue, 1));

              if (allowedLevels.includes('date')) {
                setSelectionState('date');
              } else {
                onChange?.(new Date(yearSelection, monthValue, 1));
              }
            }}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            __stopPropagation={__stopPropagation}
            nextYearLabel={nextYearLabel}
            previousYearLabel={previousYearLabel}
            preventFocus={preventFocus}
            unstyled={unstyled}
            yearLabelFormat={yearLabelFormat}
          />
        )}

        {selectionState === 'date' && (
          <MonthsList
            amountOfMonths={amountOfMonths}
            paginateBy={paginateBy}
            month={_month}
            locale={finalLocale}
            minDate={minDate}
            maxDate={maxDate}
            allowLevelChange={allowLevelChange && allowedLevels.some(x => x !== 'date')}
            size={size}
            daysRefs={daysRefs}
            onMonthChange={setMonth}
            onNextLevel={() => {
              if (allowedLevels.includes('month')) {
                setSelectionState('month');
              }
            }}
            onDayKeyDown={handleDayKeyDown}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            dayClassName={dayClassName}
            dayStyle={dayStyle}
            disableOutsideEvents={disableOutsideEvents}
            excludeDate={excludeDate}
            hideWeekdays={hideWeekdays}
            fullWidth={fullWidth}
            preventFocus={preventFocus}
            firstDayOfWeek={firstDayOfWeek}
            value={value}
            range={range}
            onChange={onChange}
            nextMonthLabel={nextMonthLabel}
            previousMonthLabel={previousMonthLabel}
            labelFormat={labelFormat}
            weekdayLabelFormat={weekdayLabelFormat}
            onDayMouseEnter={onDayMouseEnter}
            renderDay={renderDay}
            hideOutsideDates={hideOutsideDates}
            isDateInRange={isDateInRange}
            isDateFirstInRange={isDateFirstInRange}
            isDateLastInRange={isDateLastInRange}
            unstyled={unstyled}
            weekendDays={weekendDays}
            __stopPropagation={__stopPropagation}
          />
        )}
      </Box>
    );
  }
);

CalendarBase.displayName = '@mantine/dates/CalendarBase';
