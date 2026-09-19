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
import { DateLabelFormat, DateStringValue } from '../../types';
import {
  CalendarHeader,
  CalendarHeaderSettings,
  CalendarHeaderStylesNames,
} from '../CalendarHeader';
import { useDatesContext } from '../DatesProvider';
import { QuartersList, QuartersListSettings, QuartersListStylesNames } from '../QuartersList';

export type QuarterLevelStylesNames = QuartersListStylesNames | CalendarHeaderStylesNames;

export interface QuarterLevelBaseSettings extends QuartersListSettings {
  /** dayjs label format to display year label or a function that returns year label based on year value @default "YYYY" @category appearance */
  yearLabelFormat?: DateLabelFormat;
}

export interface QuarterLevelSettings extends QuarterLevelBaseSettings, CalendarHeaderSettings {}

export interface QuarterLevelProps
  extends
    BoxProps,
    QuarterLevelSettings,
    Omit<StylesApiProps<QuarterLevelFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Displayed year value in `YYYY-MM-DD` format @category state */
  year: DateStringValue;

  /** `aria-label` for change level control @category accessibility */
  levelControlAriaLabel?: string;

  /** Determines whether the calendar should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;

  /** Called when date is changed via native level select */
  __onDateChange?: (date: DateStringValue) => void;

  /** Disables native level selects when date changes would not take effect */
  __disableNativeLevelSelect?: boolean;
}

export type QuarterLevelFactory = Factory<{
  props: QuarterLevelProps;
  ref: HTMLDivElement;
  stylesNames: QuarterLevelStylesNames;
}>;

const defaultProps = {
  yearLabelFormat: 'YYYY',
} satisfies Partial<QuarterLevelProps>;

export const QuarterLevel = factory<QuarterLevelFactory>((_props) => {
  const props = useProps('QuarterLevel', defaultProps, _props);
  const {
    year,
    locale,
    minDate,
    maxDate,
    quartersListFormat,
    getQuarterControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
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
    headerControlsOrder,
    withNativeLevelSelect,
    yearsSelectRange,
    yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    __onDateChange,
    __disableNativeLevelSelect,
    size,
    classNames,
    styles,
    unstyled,
    fullWidth,
    attributes,
    ...others
  } = props;

  const ctx = useDatesContext();

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'QuarterLevel',
    classNames,
    styles,
    unstyled,
    size,
    attributes,
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
    <Box data-quarter-level size={size} {...others}>
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
        __calendarLevel="year"
        __date={year}
        __locale={locale || ctx.locale}
        __onDateChange={__onDateChange}
        __disableNativeLevelSelect={__disableNativeLevelSelect}
        __minDate={minDate}
        __maxDate={maxDate}
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
        headerControlsOrder={headerControlsOrder}
        withNativeLevelSelect={withNativeLevelSelect}
        yearsSelectRange={yearsSelectRange}
        fullWidth={fullWidth}
        {...stylesApiProps}
      />

      <QuartersList
        year={year}
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        quartersListFormat={quartersListFormat}
        getQuarterControlProps={getQuarterControlProps}
        __getControlRef={__getControlRef}
        __onControlKeyDown={__onControlKeyDown}
        __onControlClick={__onControlClick}
        __onControlMouseEnter={__onControlMouseEnter}
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        withCellSpacing={withCellSpacing}
        fullWidth={fullWidth}
        {...stylesApiProps}
      />
    </Box>
  );
});

QuarterLevel.classes = { ...CalendarHeader.classes, ...QuartersList.classes };
QuarterLevel.displayName = '@mantine/dates/QuarterLevel';
