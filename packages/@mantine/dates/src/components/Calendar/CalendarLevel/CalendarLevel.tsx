import { Box } from '@mantine/core';
import { CalendarLevel as CalendarLevelType, DateLabelFormat, DateStringValue } from '../../../types';
import { CalendarHeader, CalendarHeaderSettings } from '../../CalendarHeader';
import { Month, MonthSettings } from '../../Month';
import { CalendarColumnProvider, useCalendarContext } from '../Calendar.context';
import { ControlsList, GetControlProps } from '../ControlsList/ControlsList';
import { DecadeLabelFormat, formatDecadeLabel, formatLabel } from '../format-label/format-label';
import { getDecadeRange } from '../get-decade-range/get-decade-range';

export type CalendarYearBody = 'months' | 'quarters';

export type CalendarLevelMonthSettings = Pick<
  MonthSettings,
  | 'firstDayOfWeek'
  | 'weekdayFormat'
  | 'weekendDays'
  | 'getDayProps'
  | 'excludeDate'
  | 'renderDay'
  | 'hideOutsideDates'
  | 'hideWeekdays'
  | 'getDayAriaLabel'
  | 'highlightToday'
  | 'withWeekNumbers'
>;

export interface CalendarLevelSharedProps {
  level: CalendarLevelType;
  yearBody: CalendarYearBody;
  nextDisabled: boolean;
  previousDisabled: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onLevelClick: () => void;
  hasNextLevel: boolean;
  levelControlAriaLabel: string | ((date: DateStringValue) => string) | undefined;
  nextLabel: string | undefined;
  previousLabel: string | undefined;
  nextIcon: React.ReactNode;
  previousIcon: React.ReactNode;
  headerControlsOrder: CalendarHeaderSettings['headerControlsOrder'];
  withNativeLevelSelect: boolean | undefined;
  yearsSelectRange: [number, number] | undefined;
  fullWidth: boolean | undefined;
  withCellSpacing: boolean | undefined;
  static: boolean;
  monthLabelFormat: DateLabelFormat;
  yearLabelFormat: DateLabelFormat;
  decadeLabelFormat: DecadeLabelFormat;
  monthsListFormat: DateLabelFormat;
  quartersListFormat: DateLabelFormat;
  yearsListFormat: DateLabelFormat;
  getMonthControlProps: GetControlProps | undefined;
  getQuarterControlProps: GetControlProps | undefined;
  getYearControlProps: GetControlProps | undefined;
  monthSettings: CalendarLevelMonthSettings;
}

export interface CalendarLevelProps extends CalendarLevelSharedProps {
  levelIndex: number;
  period: DateStringValue;
  withNext: boolean;
  withPrevious: boolean;
}

export function CalendarLevel({
  level,
  yearBody,
  levelIndex,
  period,
  withNext,
  withPrevious,
  nextDisabled,
  previousDisabled,
  onNext,
  onPrevious,
  onLevelClick,
  hasNextLevel,
  levelControlAriaLabel,
  nextLabel,
  previousLabel,
  nextIcon,
  previousIcon,
  headerControlsOrder,
  withNativeLevelSelect,
  yearsSelectRange,
  fullWidth,
  withCellSpacing,
  static: isStatic,
  monthLabelFormat,
  yearLabelFormat,
  decadeLabelFormat,
  monthsListFormat,
  quartersListFormat,
  yearsListFormat,
  getMonthControlProps,
  getQuarterControlProps,
  getYearControlProps,
  monthSettings,
}: CalendarLevelProps) {
  const ctx = useCalendarContext();
  const { size } = ctx.stylesApiProps;

  const getLabel = () => {
    if (level === 'month') {
      return formatLabel(monthLabelFormat, period, ctx.locale);
    }

    if (level === 'year') {
      return formatLabel(yearLabelFormat, period, ctx.locale);
    }

    const [start, end] = getDecadeRange(period);
    return formatDecadeLabel(decadeLabelFormat, start, end, ctx.locale);
  };

  const levelAttribute =
    level === 'month'
      ? { 'data-month-level': true }
      : level === 'decade'
        ? { 'data-decade-level': true }
        : yearBody === 'quarters'
          ? { 'data-quarter-level': true }
          : { 'data-year-level': true };

  return (
    <CalendarColumnProvider value={{ index: levelIndex, period }}>
      <Box {...levelAttribute} size={size}>
        <CalendarHeader
          label={getLabel()}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          onLevelClick={level === 'decade' ? undefined : onLevelClick}
          nextDisabled={nextDisabled}
          previousDisabled={previousDisabled}
          hasNextLevel={level === 'decade' ? false : hasNextLevel}
          levelControlAriaLabel={
            typeof levelControlAriaLabel === 'function'
              ? levelControlAriaLabel(period)
              : levelControlAriaLabel
          }
          withNext={withNext}
          withPrevious={withPrevious}
          headerControlsOrder={headerControlsOrder}
          withNativeLevelSelect={withNativeLevelSelect}
          yearsSelectRange={yearsSelectRange}
          fullWidth={fullWidth}
          {...ctx.stylesApiProps}
        />

        {level === 'month' && (
          <Month
            month={period}
            locale={ctx.locale}
            minDate={ctx.minDate}
            maxDate={ctx.maxDate}
            static={isStatic}
            withCellSpacing={withCellSpacing}
            fullWidth={fullWidth}
            {...monthSettings}
            {...ctx.stylesApiProps}
          />
        )}

        {level === 'year' && (
          <ControlsList
            kind={yearBody}
            period={period}
            format={yearBody === 'quarters' ? quartersListFormat : monthsListFormat}
            getControlProps={yearBody === 'quarters' ? getQuarterControlProps : getMonthControlProps}
            withCellSpacing={withCellSpacing}
            fullWidth={fullWidth}
          />
        )}

        {level === 'decade' && (
          <ControlsList
            kind="years"
            period={period}
            format={yearsListFormat}
            getControlProps={getYearControlProps}
            withCellSpacing={withCellSpacing}
            fullWidth={fullWidth}
          />
        )}
      </Box>
    </CalendarColumnProvider>
  );
}
