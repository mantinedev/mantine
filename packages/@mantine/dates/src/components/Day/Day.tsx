import dayjs from 'dayjs';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineSize,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateStringValue } from '../../types';
import { useDatesDropdownContext } from '../PickerInputBase/DatesDropdown.context';
import classes from './Day.module.css';

export type RenderDay = (date: DateStringValue) => React.ReactNode;

export type DayStylesNames = 'day';
export type DayCssVariables = {
  day: '--day-size';
};

export interface DayProps extends BoxProps, StylesApiProps<DayFactory>, ElementProps<'button'> {
  __staticSelector?: string;

  /** Determines which element is used as root, `'button'` by default, `'div'` if static prop is set @category behavior */
  static?: boolean;

  /** Date that is displayed in `YYYY-MM-DD` format @category state */
  date: DateStringValue;

  /** Control width and height of the day @default 'sm' @category appearance */
  size?: MantineSize;

  /** Determines whether the day is considered to be a weekend @default false @category appearance */
  weekend?: boolean;

  /** Determines whether the day is outside of the current month @default false @category appearance */
  outside?: boolean;

  /** Determines whether the day is selected @default false @category state */
  selected?: boolean;

  /** Determines whether the day should not be displayed @default false @category appearance */
  hidden?: boolean;

  /** Determines whether the day is selected in range @default false @category state */
  inRange?: boolean;

  /** Determines whether the day is first in range selection @default false @category state */
  firstInRange?: boolean;

  /** Determines whether the day is last in range selection @default false @category state */
  lastInRange?: boolean;

  /** Controls day value rendering @category appearance */
  renderDay?: RenderDay;

  /** Determines whether today should be highlighted with a border @default false @category appearance */
  highlightToday?: boolean;

  /** Determines whether the day should take the full width of its cell @default false @category appearance */
  fullWidth?: boolean;
}

export type DayFactory = Factory<{
  props: DayProps;
  ref: HTMLButtonElement;
  stylesNames: DayStylesNames;
  vars: DayCssVariables;
}>;

const varsResolver = createVarsResolver<DayFactory>((_, { size }) => ({
  day: {
    '--day-size': getSize(size, 'day-size'),
  },
}));

export const Day = factory<DayFactory>((_props) => {
  const props = useProps('Day', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    highlightToday,
    fullWidth,
    attributes,
    tabIndex,
    onMouseDown,
    ...others
  } = props;

  const getStyles = useStyles<DayFactory>({
    name: __staticSelector || 'Day',
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
    rootSelector: 'day',
  });

  const dropdown = useDatesDropdownContext();
  const isToday = dayjs(date).isSame(new Date(), 'day');

  return (
    <UnstyledButton<any>
      {...getStyles('day', { style: hidden ? { display: 'none' } : undefined })}
      component={isStatic ? 'div' : 'button'}
      disabled={isStatic ? undefined : disabled}
      aria-pressed={isStatic ? undefined : !!(selected && !disabled)}
      aria-current={isToday ? 'date' : undefined}
      data-today={isToday || undefined}
      data-hidden={hidden || undefined}
      data-highlight-today={highlightToday || undefined}
      data-disabled={disabled || undefined}
      data-weekend={(!disabled && !outside && weekend) || undefined}
      data-outside={(!disabled && outside) || undefined}
      data-selected={(!disabled && selected) || undefined}
      data-in-range={(inRange && !disabled) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      data-static={isStatic || undefined}
      data-full-width={fullWidth || undefined}
      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
      unstyled={unstyled}
      {...others}
      tabIndex={isStatic ? undefined : dropdown.preventFocus ? -1 : tabIndex}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
        onMouseDown?.(event);
        dropdown.preventFocus && event.preventDefault();
      }}
    >
      {renderDay?.(date) ?? dayjs(date).date()}
    </UnstyledButton>
  );
});

Day.classes = classes;
Day.varsResolver = varsResolver;
Day.displayName = '@mantine/dates/Day';

export namespace Day {
  export type Props = DayProps;
  export type StylesNames = DayStylesNames;
  export type Factory = DayFactory;
  export type CssVariables = DayCssVariables;
}
