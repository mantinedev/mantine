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

  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Change next icon */
  nextIcon?: React.ReactNode;

  /** Change previous icon */
  previousIcon?: React.ReactNode;

  /** Aria-label for next button */
  nextLabel?: string;

  /** Aria-label for previous button */
  previousLabel?: string;

  /** Called when next button is clicked */
  onNext?: () => void;

  /** Called when previous button is clicked */
  onPrevious?: () => void;

  /** Called when level button is clicked */
  onLevelClick?: () => void;

  /** Determines whether next control should be disabled, defaults to false */
  nextDisabled?: boolean;

  /** Determines whether previous control should be disabled, defaults to false */
  previousDisabled?: boolean;

  /** Determines whether next level button should be enabled, defaults to true */
  hasNextLevel?: boolean;

  /** Determines whether next control should be rendered, defaults to true */
  withNext?: boolean;

  /** Determines whether previous control should be rendered, defaults to true */
  withPrevious?: boolean;

  /** Component size */
  size?: MantineSize;
}

export interface CalendarHeaderProps
  extends BoxProps,
    CalendarHeaderSettings,
    StylesApiProps<CalendarHeaderFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Label displayed between next and previous buttons */
  label: React.ReactNode;

  /** Aria-label for level control */
  levelControlAriaLabel?: string;
}

export type CalendarHeaderFactory = Factory<{
  props: CalendarHeaderProps;
  ref: HTMLDivElement;
  stylesNames: CalendarHeaderStylesNames;
  vars: CalendarHeaderCssVariables;
}>;

const defaultProps: Partial<CalendarHeaderProps> = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true,
};

const varsResolver = createVarsResolver<CalendarHeaderFactory>((_, { size }) => ({
  calendarHeader: {
    '--dch-control-size': getSize(size, 'dch-control-size'),
    '--dch-fz': getFontSize(size),
  },
}));

export const CalendarHeader = factory<CalendarHeaderFactory>((_props, ref) => {
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
    __staticSelector,
    __preventFocus,
    __stopPropagation,
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
    vars,
    varsResolver,
    rootSelector: 'calendarHeader',
  });

  const preventFocus = __preventFocus
    ? (event: React.MouseEvent<HTMLElement>) => event.preventDefault()
    : undefined;

  return (
    <Box {...getStyles('calendarHeader')} ref={ref} {...others}>
      {withPrevious && (
        <UnstyledButton
          {...getStyles('calendarHeaderControl')}
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
      )}

      <UnstyledButton
        component={hasNextLevel ? 'button' : 'div'}
        {...getStyles('calendarHeaderLevel')}
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

      {withNext && (
        <UnstyledButton
          {...getStyles('calendarHeaderControl')}
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
      )}
    </Box>
  );
});

CalendarHeader.classes = classes;
CalendarHeader.displayName = '@mantine/dates/CalendarHeader';
