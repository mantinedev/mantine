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
