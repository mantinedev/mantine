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
import classes from './CalendarHeader.module.css';
import { CalendarHeaderYearChevrons } from './CalendarHeaderYearChevrons';

export type CalendarHeaderStylesNames =
  | 'calendarHeader'
  | 'calendarHeaderControl'
  | 'calendarHeaderLevel'
  | 'calendarHeaderControlIcon';
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

  /** Change next year icon */
  nextYearIcon?: React.ReactNode;

  /** Change previous year icon */
  previousYearIcon?: React.ReactNode;

  /** Next button `aria-label` */
  nextLabel?: string;

  /** Next year button `aria-label` */
  nextYearLabel?: string;

  /** Previous button `aria-label` */
  previousLabel?: string;

  /** Previous year button `aria-label` */
  previousYearLabel?: string;

  /** Called when the next button is clicked */
  onNext?: () => void;

  /** Called when the previous button is clicked */
  onPrevious?: () => void;

  /** Called when the next year button is clicked */
  onNextYear?: () => void;

  /** Called when the previous year button is clicked */
  onPreviousYear?: () => void;

  /** Called when the level button is clicked */
  onLevelClick?: () => void;

  /** Disables next control */
  nextDisabled?: boolean;

  /** Disables previous control */
  previousDisabled?: boolean;

  /** Disables next year control */
  nextYearDisabled?: boolean;

  /** Disables previous year control */
  previousYearDisabled?: boolean;

  /** Determines whether next level button should be enabled @default true */
  hasNextLevel?: boolean;

  /** Determines whether next control should be rendered @default true */
  withNext?: boolean;

  /** Determines whether previous control should be rendered @default true */
  withPrevious?: boolean;

  /** Determines whether next control should be rendered @default false */
  withNextYear?: boolean;

  /** Determines whether previous control should be rendered @default false */
  withPreviousYear?: boolean;

  /** Component size */
  size?: MantineSize;

  /** Controls order @default ['previous-year', 'previous', 'level', 'next', 'next-year'] */
  headerControlsOrder?: ('previous' | 'previous-year' | 'next-year' | 'next' | 'level')[];

  /** Determines whether the header should take the full width of its container @default false */
  fullWidth?: boolean;
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
  withNextYear: false,
  withPreviousYear: false,
  headerControlsOrder: ['previous-year', 'previous', 'level', 'next', 'next-year'],
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
    nextYearIcon,
    previousIcon,
    previousYearIcon,
    nextLabel,
    nextYearLabel,
    previousLabel,
    previousYearLabel,
    onNext,
    onNextYear,
    onPrevious,
    onPreviousYear,
    onLevelClick,
    label,
    nextDisabled,
    nextYearDisabled,
    previousDisabled,
    previousYearDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withNextYear,
    withPrevious,
    withPreviousYear,
    headerControlsOrder,
    fullWidth,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
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

  const previousYearControl = withPreviousYear && (
    <UnstyledButton
      {...getStyles('calendarHeaderControl')}
      key="previous-year"
      data-direction="previous"
      aria-label={previousYearLabel}
      onClick={onPreviousYear}
      unstyled={unstyled}
      onMouseDown={preventFocus}
      disabled={previousYearDisabled}
      data-disabled={previousYearDisabled || undefined}
      tabIndex={__preventFocus || previousYearDisabled ? -1 : 0}
      data-mantine-stop-propagation={__stopPropagation || undefined}
    >
      {previousYearIcon || (
        <>
          <CalendarHeaderYearChevrons
            {...getStyles('calendarHeaderControlIcon')}
            data-direction="previous"
            size="45%"
          />
        </>
      )}
    </UnstyledButton>
  );

  const levelControl = (
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

  const nextYearControl = withNextYear && (
    <UnstyledButton
      {...getStyles('calendarHeaderControl')}
      key="next-year"
      data-direction="next"
      aria-label={nextYearLabel}
      onClick={onNextYear}
      unstyled={unstyled}
      onMouseDown={preventFocus}
      disabled={nextYearDisabled}
      data-disabled={nextYearDisabled || undefined}
      tabIndex={__preventFocus || nextYearDisabled ? -1 : 0}
      data-mantine-stop-propagation={__stopPropagation || undefined}
    >
      {nextYearIcon || (
        <CalendarHeaderYearChevrons
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
    if (control === 'previous-year') {
      return previousYearControl;
    }
    if (control === 'level') {
      return levelControl;
    }
    if (control === 'next') {
      return nextControl;
    }
    if (control === 'next-year') {
      return nextYearControl;
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
