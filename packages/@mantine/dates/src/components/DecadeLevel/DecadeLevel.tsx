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
import { YearsList, YearsListSettings, YearsListStylesNames } from '../YearsList';
import { getDecadeRange } from './get-decade-range/get-decade-range';

export type DecadeLevelStylesNames = YearsListStylesNames | CalendarHeaderStylesNames;

export interface DecadeLevelBaseSettings extends YearsListSettings {
  /** Dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
  decadeLabelFormat?: string | ((startOfDecade: Date, endOfDecade: Date) => React.ReactNode);
}

export interface DecadeLevelSettings
  extends DecadeLevelBaseSettings,
    Omit<CalendarHeaderSettings, 'onLevelClick' | 'hasNextLevel'> {}

export interface DecadeLevelProps
  extends BoxProps,
    DecadeLevelSettings,
    Omit<StylesApiProps<DecadeLevelFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Decade that is currently displayed */
  decade: Date;

  /** Aria-label for change level control */
  levelControlAriaLabel?: string;
}

export type DecadeLevelFactory = Factory<{
  props: DecadeLevelProps;
  ref: HTMLDivElement;
  stylesNames: DecadeLevelStylesNames;
}>;

const defaultProps: Partial<DecadeLevelProps> = {
  decadeLabelFormat: 'YYYY',
};

export const DecadeLevel = factory<DecadeLevelFactory>((_props, ref) => {
  const props = useProps('DecadeLevel', defaultProps, _props);
  const {
    // YearsList settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
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
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,

    // Other props
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size,
    ...others
  } = props;

  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'DecadeLevel',
    classNames,
    styles,
    unstyled,
    size,
  };

  const _nextDisabled =
    typeof nextDisabled === 'boolean'
      ? nextDisabled
      : maxDate
        ? !dayjs(endOfDecade).endOf('year').isBefore(maxDate)
        : false;

  const _previousDisabled =
    typeof previousDisabled === 'boolean'
      ? previousDisabled
      : minDate
        ? !dayjs(startOfDecade).startOf('year').isAfter(minDate)
        : false;

  const formatDecade = (date: Date, format: string) =>
    dayjs(date)
      .locale(locale || ctx.locale)
      .format(format);

  return (
    <Box data-decade-level size={size} ref={ref} {...others}>
      <CalendarHeader
        label={
          typeof decadeLabelFormat === 'function'
            ? decadeLabelFormat(startOfDecade, endOfDecade)
            : `${formatDecade(startOfDecade, decadeLabelFormat!)} – ${formatDecade(
                endOfDecade,
                decadeLabelFormat!
              )}`
        }
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        nextIcon={nextIcon}
        previousIcon={previousIcon}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        onNext={onNext}
        onPrevious={onPrevious}
        nextDisabled={_nextDisabled}
        previousDisabled={_previousDisabled}
        hasNextLevel={false}
        levelControlAriaLabel={levelControlAriaLabel}
        withNext={withNext}
        withPrevious={withPrevious}
        {...stylesApiProps}
      />

      <YearsList
        decade={decade}
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        yearsListFormat={yearsListFormat}
        getYearControlProps={getYearControlProps}
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

DecadeLevel.classes = { ...YearsList.classes, ...CalendarHeader.classes };
DecadeLevel.displayName = '@mantine/dates/DecadeLevel';
