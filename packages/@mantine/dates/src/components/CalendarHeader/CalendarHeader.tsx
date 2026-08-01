import dayjs from 'dayjs';
import {
  AccordionChevron,
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getSize,
  MantineSize,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateStringValue } from '../../types';
import classes from './CalendarHeader.module.css';

export type CalendarHeaderStylesNames =
  | 'calendarHeader'
  | 'calendarHeaderControl'
  | 'calendarHeaderLevel'
  | 'calendarHeaderControlIcon'
  | 'calendarHeaderSelect';
export type CalendarHeaderCssVariables = {
  calendarHeader: '--dch-control-size' | '--dch-fz';
};

export interface CalendarHeaderSettings {
  __preventFocus?: boolean;

  /** Determines whether propagation for `Escape` key should be stopped */
  __stopPropagation?: boolean;

  /** Change next icon */
  nextIcon?: React.ReactNode;

  /** Change previous icon */
  previousIcon?: React.ReactNode;

  /** Next button `aria-label` */
  nextLabel?: string;

  /** Previous button `aria-label` */
  previousLabel?: string;

  /** Called when the next button is clicked */
  onNext?: () => void;

  /** Called when the previous button is clicked */
  onPrevious?: () => void;

  /** Called when the level button is clicked */
  onLevelClick?: () => void;

  /** Disables next control */
  nextDisabled?: boolean;

  /** Disables previous control */
  previousDisabled?: boolean;

  /** Determines whether next level button should be enabled @default true */
  hasNextLevel?: boolean;

  /** Determines whether next control should be rendered @default true */
  withNext?: boolean;

  /** Determines whether previous control should be rendered @default true */
  withPrevious?: boolean;

  /** Component size */
  size?: MantineSize;

  /** Controls order @default ['previous', 'level', 'next'] */
  headerControlsOrder?: ('previous' | 'next' | 'level')[];

  /** Determines whether the header should take the full width of its container @default false */
  fullWidth?: boolean;

  /** Determines whether level select controls should be rendered as native `<select>` elements @default false */
  withNativeLevelSelect?: boolean;

  /** Year range for native level select, tuple of `[startYear, endYear]`. Defaults to `[currentYear - 100, currentYear + 50]` or values derived from `minDate`/`maxDate` if set. */
  yearsSelectRange?: [number, number];
}

export interface CalendarHeaderProps
  extends
    BoxProps,
    CalendarHeaderSettings,
    StylesApiProps<CalendarHeaderFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Label displayed between next and previous buttons */
  label: React.ReactNode;

  /** Level control `aria-label` */
  levelControlAriaLabel?: string;

  /** Current calendar level, used for native level select rendering */
  __calendarLevel?: 'month' | 'year' | 'decade';

  /** Current date displayed by the calendar, used for native level select */
  __date?: DateStringValue;

  /** Locale for native level select labels */
  __locale?: string;

  /** Called when date is changed via native level select */
  __onDateChange?: (date: DateStringValue) => void;

  /** Min date constraint for native level select */
  __minDate?: DateStringValue | Date;

  /** Max date constraint for native level select */
  __maxDate?: DateStringValue | Date;

  /** Disables native level selects when date changes would not take effect (controlled `date` without `onDateChange`) */
  __disableNativeLevelSelect?: boolean;
}

export type CalendarHeaderFactory = Factory<{
  props: CalendarHeaderProps;
  ref: HTMLDivElement;
  stylesNames: CalendarHeaderStylesNames;
  vars: CalendarHeaderCssVariables;
}>;

const defaultProps = {
  hasNextLevel: true,
  withNext: true,
  withPrevious: true,
  headerControlsOrder: ['previous', 'level', 'next'],
} satisfies Partial<CalendarHeaderProps>;

const varsResolver = createVarsResolver<CalendarHeaderFactory>((_, { size }) => ({
  calendarHeader: {
    '--dch-control-size': getSize(size, 'dch-control-size'),
    '--dch-fz': getFontSize(size),
  },
}));

export const CalendarHeader = factory<CalendarHeaderFactory>((_props) => {
  const props = useProps('CalendarHeader', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    headerControlsOrder,
    fullWidth,
    withNativeLevelSelect,
    yearsSelectRange,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
    __calendarLevel,
    __date,
    __locale,
    __onDateChange,
    __minDate,
    __maxDate,
    __disableNativeLevelSelect,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<CalendarHeaderFactory>({
    name: __staticSelector || 'CalendarHeader',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    rootSelector: 'calendarHeader',
  });

  const preventFocus = __preventFocus
    ? (event: React.MouseEvent<HTMLElement>) => event.preventDefault()
    : undefined;

  const previousControl = withPrevious && (
    <UnstyledButton
      {...getStyles('calendarHeaderControl')}
      key="previous"
      data-direction="previous"
      aria-label={previousLabel}
      onClick={onPrevious}
      unstyled={unstyled}
      onMouseDown={preventFocus}
      disabled={previousDisabled}
      data-disabled={previousDisabled || undefined}
      tabIndex={__preventFocus || previousDisabled ? -1 : 0}
      data-mantine-stop-propagation={__stopPropagation || undefined}
    >
      {previousIcon || (
        <AccordionChevron
          {...getStyles('calendarHeaderControlIcon')}
          data-direction="previous"
          size="45%"
        />
      )}
    </UnstyledButton>
  );

  const currentYear = new Date().getFullYear();
  const displayedYear = __date ? dayjs(__date).year() : currentYear;
  const rawMinYear =
    yearsSelectRange?.[0] ?? (__minDate ? dayjs(__minDate).year() : currentYear - 100);
  const rawMaxYear =
    yearsSelectRange?.[1] ?? (__maxDate ? dayjs(__maxDate).year() : currentYear + 50);
  // Guarantee a non-inverted range that always contains the currently displayed year, so the
  // controlled <select> value always matches an <option> and the year list is never empty.
  const minYear = Math.min(rawMinYear, rawMaxYear, displayedYear);
  const maxYear = Math.max(rawMinYear, rawMaxYear, displayedYear);

  const clampNativeSelectDate = (date: dayjs.Dayjs): DateStringValue => {
    let result = date;
    if (__minDate && result.isBefore(dayjs(__minDate), 'day')) {
      result = dayjs(__minDate);
    }
    if (__maxDate && result.isAfter(dayjs(__maxDate), 'day')) {
      result = dayjs(__maxDate);
    }
    return result.format('YYYY-MM-DD') as DateStringValue;
  };

  const nativeLevelControl =
    withNativeLevelSelect && __date && __onDateChange && __calendarLevel !== 'decade' ? (
      <div {...getStyles('calendarHeaderLevel')} key="level" data-static data-native-level-select>
        {__calendarLevel === 'month' && (
          <select
            {...getStyles('calendarHeaderSelect')}
            data-select="month"
            disabled={__disableNativeLevelSelect}
            value={dayjs(__date).month()}
            onChange={(event) => {
              __onDateChange(
                clampNativeSelectDate(dayjs(__date).month(parseInt(event.currentTarget.value, 10)))
              );
            }}
            onMouseDown={preventFocus}
            aria-label={levelControlAriaLabel}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {dayjs()
                  .locale(__locale || 'en')
                  .month(i)
                  .format('MMMM')}
              </option>
            ))}
          </select>
        )}
        <select
          {...getStyles('calendarHeaderSelect')}
          data-select="year"
          disabled={__disableNativeLevelSelect}
          value={dayjs(__date).year()}
          onChange={(event) => {
            __onDateChange(
              clampNativeSelectDate(dayjs(__date).year(parseInt(event.currentTarget.value, 10)))
            );
          }}
          onMouseDown={preventFocus}
          aria-label={levelControlAriaLabel}
        >
          {Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
            const year = minYear + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    ) : null;

  const levelControl = nativeLevelControl || (
    <UnstyledButton
      component={hasNextLevel ? 'button' : 'div'}
      {...getStyles('calendarHeaderLevel')}
      key="level"
      onClick={hasNextLevel ? onLevelClick : undefined}
      unstyled={unstyled}
      onMouseDown={hasNextLevel ? preventFocus : undefined}
      disabled={!hasNextLevel}
      data-static={!hasNextLevel || undefined}
      aria-label={levelControlAriaLabel}
      tabIndex={__preventFocus || !hasNextLevel ? -1 : 0}
      data-mantine-stop-propagation={__stopPropagation || undefined}
    >
      {label}
    </UnstyledButton>
  );

  const nextControl = withNext && (
    <UnstyledButton
      {...getStyles('calendarHeaderControl')}
      key="next"
      data-direction="next"
      aria-label={nextLabel}
      onClick={onNext}
      unstyled={unstyled}
      onMouseDown={preventFocus}
      disabled={nextDisabled}
      data-disabled={nextDisabled || undefined}
      tabIndex={__preventFocus || nextDisabled ? -1 : 0}
      data-mantine-stop-propagation={__stopPropagation || undefined}
    >
      {nextIcon || (
        <AccordionChevron
          {...getStyles('calendarHeaderControlIcon')}
          data-direction="next"
          size="45%"
        />
      )}
    </UnstyledButton>
  );

  const controls = headerControlsOrder.map((control) => {
    if (control === 'previous') {
      return previousControl;
    }
    if (control === 'level') {
      return levelControl;
    }
    if (control === 'next') {
      return nextControl;
    }
    return null;
  });

  return (
    <Box {...getStyles('calendarHeader')} data-full-width={fullWidth || undefined} {...others}>
      {controls}
    </Box>
  );
});

CalendarHeader.classes = classes;
CalendarHeader.varsResolver = varsResolver;
CalendarHeader.displayName = '@mantine/dates/CalendarHeader';

export namespace CalendarHeader {
  export type Props = CalendarHeaderProps;
  export type StylesNames = CalendarHeaderStylesNames;
  export type CssVariables = CalendarHeaderCssVariables;
  export type Settings = CalendarHeaderSettings;
  export type Factory = CalendarHeaderFactory;
}
