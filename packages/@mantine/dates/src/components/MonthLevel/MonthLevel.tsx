import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
} from '@mantine/core';
import {
  CalendarHeader,
  CalendarHeaderSettings,
  CalendarHeaderStylesNames,
} from '../CalendarHeader';
import { useDatesContext } from '../DatesProvider';
import { Month, MonthSettings, MonthStylesNames } from '../Month';

export type MonthLevelStylesNames = MonthStylesNames | CalendarHeaderStylesNames;

export interface MonthLevelBaseSettings extends MonthSettings {
  /** Dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
  monthLabelFormat?: string | ((month: Date) => React.ReactNode);
}

export interface MonthLevelSettings extends MonthLevelBaseSettings, CalendarHeaderSettings {}

export interface MonthLevelProps
  extends BoxProps,
    MonthLevelSettings,
    Omit<StylesApiProps<MonthLevelFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Month that is currently displayed */
  month: Date;

  /** Aria-label for change level control */
  levelControlAriaLabel?: string;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

export type MonthLevelFactory = Factory<{
  props: MonthLevelProps;
  ref: HTMLDivElement;
  stylesNames: MonthLevelStylesNames;
}>;

const defaultProps: Partial<MonthLevelProps> = {
  monthLabelFormat: 'MMMM YYYY',
};

export const MonthLevel = factory<MonthLevelFactory>((_props, ref) => {
  const props = useProps('MonthLevel', defaultProps, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    highlightToday,
    withWeekNumbers,

    // CalendarHeader settings
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,

    // Other props
    monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size,
    static: isStatic,
    ...others
  } = props;

  const ctx = useDatesContext();

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'MonthLevel',
    classNames,
    styles,
    unstyled,
    size,
  };

  const _nextDisabled =
    typeof nextDisabled === 'boolean'
      ? nextDisabled
      : maxDate
        ? !dayjs(month).endOf('month').isBefore(maxDate)
        : false;

  const _previousDisabled =
    typeof previousDisabled === 'boolean'
      ? previousDisabled
      : minDate
        ? !dayjs(month).startOf('month').isAfter(minDate)
        : false;

  return (
    <Box data-month-level size={size} ref={ref} {...others}>
      <CalendarHeader
        label={
          typeof monthLabelFormat === 'function'
            ? monthLabelFormat(month)
            : dayjs(month)
                .locale(locale || ctx.locale)
                .format(monthLabelFormat)
        }
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        nextIcon={nextIcon}
        previousIcon={previousIcon}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        onNext={onNext}
        onPrevious={onPrevious}
        onLevelClick={onLevelClick}
        nextDisabled={_nextDisabled}
        previousDisabled={_previousDisabled}
        hasNextLevel={hasNextLevel}
        levelControlAriaLabel={levelControlAriaLabel}
        withNext={withNext}
        withPrevious={withPrevious}
        {...stylesApiProps}
      />

      <Month
        month={month}
        locale={locale}
        firstDayOfWeek={firstDayOfWeek}
        weekdayFormat={weekdayFormat}
        weekendDays={weekendDays}
        getDayProps={getDayProps}
        excludeDate={excludeDate}
        minDate={minDate}
        maxDate={maxDate}
        renderDay={renderDay}
        hideOutsideDates={hideOutsideDates}
        hideWeekdays={hideWeekdays}
        getDayAriaLabel={getDayAriaLabel}
        __getDayRef={__getDayRef}
        __onDayKeyDown={__onDayKeyDown}
        __onDayClick={__onDayClick}
        __onDayMouseEnter={__onDayMouseEnter}
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        static={isStatic}
        withCellSpacing={withCellSpacing}
        highlightToday={highlightToday}
        withWeekNumbers={withWeekNumbers}
        {...stylesApiProps}
      />
    </Box>
  );
});

MonthLevel.classes = { ...Month.classes, ...CalendarHeader.classes };
MonthLevel.displayName = '@mantine/dates/MonthLevel';
