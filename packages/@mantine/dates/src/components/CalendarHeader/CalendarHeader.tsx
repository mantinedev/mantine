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
import { useCalendarColumn, useOptionalCalendarContext } from '../Calendar/Calendar.context';
import { useDatesDropdownContext } from '../PickerInputBase/DatesDropdown.context';
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
  /** Change next icon @category appearance */
  nextIcon?: React.ReactNode;

  /** Change previous icon @category appearance */
  previousIcon?: React.ReactNode;

  /** Next button `aria-label` @category accessibility */
  nextLabel?: string;

  /** Previous button `aria-label` @category accessibility */
  previousLabel?: string;

  /** Called when the next button is clicked @category behavior */
  onNext?: () => void;

  /** Called when the previous button is clicked @category behavior */
  onPrevious?: () => void;

  /** Called when the level button is clicked @category behavior */
  onLevelClick?: () => void;

  /** Disables next control @category behavior */
  nextDisabled?: boolean;

  /** Disables previous control @category behavior */
  previousDisabled?: boolean;

  /** Determines whether next level button should be enabled @default true @category behavior */
  hasNextLevel?: boolean;

  /** Determines whether next control should be rendered @default true @category appearance */
  withNext?: boolean;

  /** Determines whether previous control should be rendered @default true @category appearance */
  withPrevious?: boolean;

  /** Component size @category appearance */
  size?: MantineSize;

  /** Controls order @default ['previous', 'level', 'next'] @category appearance */
  headerControlsOrder?: ('previous' | 'next' | 'level')[];

  /** Determines whether the header should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;

  /** Determines whether level select controls should be rendered as native `<select>` elements @default false @category behavior */
  withNativeLevelSelect?: boolean;

  /** Year range for native level select, tuple of `[startYear, endYear]`. Defaults to `[currentYear - 100, currentYear + 50]` or values derived from `minDate`/`maxDate` if set. @category appearance */
  yearsSelectRange?: [number, number];
}

export interface CalendarHeaderProps
  extends
    BoxProps,
    CalendarHeaderSettings,
    StylesApiProps<CalendarHeaderFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Label displayed between next and previous buttons @category appearance */
  label: React.ReactNode;

  /** Level control `aria-label` @category accessibility */
  levelControlAriaLabel?: string;
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

  const dropdown = useDatesDropdownContext();
  const calendar = useOptionalCalendarContext();
  const column = useCalendarColumn();

  const preventFocus = dropdown.preventFocus
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
      tabIndex={dropdown.preventFocus || previousDisabled ? -1 : 0}
      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
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

  const nativeSelect =
    withNativeLevelSelect && calendar && column && calendar.level !== 'decade'
      ? {
          level: calendar.level,
          date: column.period,
          locale: calendar.locale,
          minDate: calendar.minDate,
          maxDate: calendar.maxDate,
          disabled: calendar.controller.dateReadOnly,
          onDateChange: calendar.controller.setDate,
        }
      : null;

  const currentYear = new Date().getFullYear();
  const displayedYear = nativeSelect ? dayjs(nativeSelect.date).year() : currentYear;
  const rawMinYear =
    yearsSelectRange?.[0] ??
    (nativeSelect?.minDate ? dayjs(nativeSelect.minDate).year() : currentYear - 100);
  const rawMaxYear =
    yearsSelectRange?.[1] ??
    (nativeSelect?.maxDate ? dayjs(nativeSelect.maxDate).year() : currentYear + 50);
  const minYear = Math.min(rawMinYear, rawMaxYear, displayedYear);
  const maxYear = Math.max(rawMinYear, rawMaxYear, displayedYear);

  const clampNativeSelectDate = (date: dayjs.Dayjs): DateStringValue => {
    let result = date;
    if (nativeSelect?.minDate && result.isBefore(dayjs(nativeSelect.minDate), 'day')) {
      result = dayjs(nativeSelect.minDate);
    }
    if (nativeSelect?.maxDate && result.isAfter(dayjs(nativeSelect.maxDate), 'day')) {
      result = dayjs(nativeSelect.maxDate);
    }
    return result.format('YYYY-MM-DD') as DateStringValue;
  };

  const nativeLevelControl = nativeSelect ? (
    <div {...getStyles('calendarHeaderLevel')} key="level" data-static data-native-level-select>
      {nativeSelect.level === 'month' && (
        <select
          {...getStyles('calendarHeaderSelect')}
          data-select="month"
          disabled={nativeSelect.disabled}
          value={dayjs(nativeSelect.date).month()}
          onChange={(event) => {
            nativeSelect.onDateChange(
              clampNativeSelectDate(
                dayjs(nativeSelect.date).month(parseInt(event.currentTarget.value, 10))
              )
            );
          }}
          onMouseDown={preventFocus}
          aria-label={levelControlAriaLabel}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {dayjs().locale(nativeSelect.locale).month(i).format('MMMM')}
            </option>
          ))}
        </select>
      )}
      <select
        {...getStyles('calendarHeaderSelect')}
        data-select="year"
        disabled={nativeSelect.disabled}
        value={dayjs(nativeSelect.date).year()}
        onChange={(event) => {
          nativeSelect.onDateChange(
            clampNativeSelectDate(
              dayjs(nativeSelect.date).year(parseInt(event.currentTarget.value, 10))
            )
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
      data-level-control
      onClick={hasNextLevel ? onLevelClick : undefined}
      unstyled={unstyled}
      onMouseDown={hasNextLevel ? preventFocus : undefined}
      disabled={!hasNextLevel}
      data-static={!hasNextLevel || undefined}
      aria-label={levelControlAriaLabel}
      tabIndex={dropdown.preventFocus || !hasNextLevel ? -1 : 0}
      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
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
      tabIndex={dropdown.preventFocus || nextDisabled ? -1 : 0}
      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
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
