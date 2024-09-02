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
import { MonthsList, MonthsListSettings, MonthsListStylesNames } from '../MonthsList';

export type YearLevelStylesNames = MonthsListStylesNames | CalendarHeaderStylesNames;

export interface YearLevelBaseSettings extends MonthsListSettings {
  /** Dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY" */
  yearLabelFormat?: string | ((year: Date) => React.ReactNode);
}

export interface YearLevelSettings extends YearLevelBaseSettings, CalendarHeaderSettings {}

export interface YearLevelProps
  extends BoxProps,
    YearLevelSettings,
    Omit<StylesApiProps<YearLevelFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Year that is currently displayed */
  year: Date;

  /** Aria-label for change level control */
  levelControlAriaLabel?: string;
}

export type YearLevelFactory = Factory<{
  props: YearLevelProps;
  ref: HTMLDivElement;
  stylesNames: YearLevelStylesNames;
}>;

const defaultProps: Partial<YearLevelProps> = {
  yearLabelFormat: 'YYYY',
};

export const YearLevel = factory<YearLevelFactory>((_props, ref) => {
  const props = useProps('YearLevel', defaultProps, _props);
  const {
    // MonthsList settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,

    // CalendarHeader settings
    __preventFocus,
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
    yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    classNames,
    styles,
    unstyled,
    ...others
  } = props;

  const ctx = useDatesContext();

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'YearLevel',
    classNames,
    styles,
    unstyled,
    size,
  };

  const _nextDisabled =
    typeof nextDisabled === 'boolean'
      ? nextDisabled
      : maxDate
        ? !dayjs(year).endOf('year').isBefore(maxDate)
        : false;

  const _previousDisabled =
    typeof previousDisabled === 'boolean'
      ? previousDisabled
      : minDate
        ? !dayjs(year).startOf('year').isAfter(minDate)
        : false;

  return (
    <Box data-year-level size={size} ref={ref} {...others}>
      <CalendarHeader
        label={
          typeof yearLabelFormat === 'function'
            ? yearLabelFormat(year)
            : dayjs(year)
                .locale(locale || ctx.locale)
                .format(yearLabelFormat)
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

      <MonthsList
        year={year}
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        monthsListFormat={monthsListFormat}
        getMonthControlProps={getMonthControlProps}
        __getControlRef={__getControlRef}
        __onControlKeyDown={__onControlKeyDown}
        __onControlClick={__onControlClick}
        __onControlMouseEnter={__onControlMouseEnter}
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        withCellSpacing={withCellSpacing}
        {...stylesApiProps}
      />
    </Box>
  );
});

YearLevel.classes = { ...CalendarHeader.classes, ...MonthsList.classes };
YearLevel.displayName = '@mantine/dates/YearLevel';
