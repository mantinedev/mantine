import React, { useRef, useState, forwardRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { Box, MantineSize, ClassNames, DefaultProps } from '@mantine/core';
import { MonthSettings, DayKeydownPayload } from '../Month';
import { YearPicker, YearPickerStylesNames } from './YearPicker/YearPicker';
import { MonthPicker, MonthPickerStylesNames } from './MonthPicker/MonthPicker';
import { MonthsList, MonthsListStylesNames } from './MonthsList/MonthsList';
import useStyles from './CalendarBase.styles';

export type CalendarBaseStylesNames =
  | ClassNames<typeof useStyles>
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

  /** Selected value */
  value?: Date | Date[] | null;

  /** Calendar size */
  size?: MantineSize;

  /** Allow to change level (date – month – year) */
  allowLevelChange?: boolean;

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

  /** dayjs label format */
  labelFormat?: string;

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
      size = 'sm',
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
      ...others
    }: CalendarBaseProps,
    ref
  ) => {
    const [selectionState, setSelectionState] = useState(initialLevel);
    const { classes, cx, theme } = useStyles(
      { size, fullWidth, amountOfMonths: selectionState === 'date' ? amountOfMonths : 1 },
      { name: __staticSelector, styles, classNames }
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
      rule: (val) => val instanceof Date,
    });

    const [yearSelection, setYearSelection] = useState(_month.getFullYear());
    const minYear = minDate instanceof Date ? minDate.getFullYear() : 0;
    const maxYear = maxDate instanceof Date ? maxDate.getFullYear() : 10000;

    const handleDayKeyDown = (
      monthIndex: number,
      payload: DayKeydownPayload,
      event: React.KeyboardEvent<HTMLButtonElement>
    ) => {
      switch (event.code) {
        case 'ArrowDown': {
          event.preventDefault();

          if (payload.rowIndex + 1 < daysRefs.current[monthIndex].length) {
            daysRefs.current[monthIndex][payload.rowIndex + 1][payload.cellIndex].focus();
          }
          break;
        }

        case 'ArrowUp': {
          event.preventDefault();

          if (payload.rowIndex > 0) {
            daysRefs.current[monthIndex][payload.rowIndex - 1][payload.cellIndex].focus();
          }
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();

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
          event.preventDefault();

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

    return (
      <Box className={cx(classes.calendarBase, className)} ref={ref} {...others}>
        {selectionState === 'year' && (
          <YearPicker
            size={size}
            value={yearSelection}
            minYear={minYear}
            maxYear={maxYear}
            onChange={(year) => {
              setYearSelection(year);
              setSelectionState('month');
            }}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            nextDecadeLabel={nextDecadeLabel}
            previousDecadeLabel={previousDecadeLabel}
            preventFocus={preventFocus}
          />
        )}

        {selectionState === 'month' && (
          <MonthPicker
            size={size}
            value={{ month: _month.getMonth(), year: _month.getFullYear() }}
            year={yearSelection}
            onYearChange={setYearSelection}
            onNextLevel={() => setSelectionState('year')}
            locale={finalLocale}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(monthValue) => {
              setMonth(new Date(yearSelection, monthValue, 1));
              setSelectionState('date');
            }}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            nextYearLabel={nextYearLabel}
            previousYearLabel={previousYearLabel}
            preventFocus={preventFocus}
          />
        )}

        {selectionState === 'date' && (
          <MonthsList
            amountOfMonths={amountOfMonths}
            month={_month}
            locale={finalLocale}
            minDate={minDate}
            maxDate={maxDate}
            allowLevelChange={allowLevelChange}
            size={size}
            daysRefs={daysRefs}
            onMonthChange={setMonth}
            onNextLevel={() => setSelectionState('month')}
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
          />
        )}
      </Box>
    );
  }
);

CalendarBase.displayName = '@mantine/dates/CalendarBase';
