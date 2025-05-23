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
import classes from './Day.module.css';

export type RenderDay = (date: DateStringValue) => React.ReactNode;

export type DayStylesNames = 'day';
export type DayCssVariables = {
  day: '--day-size';
};

export interface DayProps extends BoxProps, StylesApiProps<DayFactory>, ElementProps<'button'> {
  __staticSelector?: string;

  /** Determines which element is used as root, `'button'` by default, `'div'` if static prop is set */
  static?: boolean;

  /** Date that is displayed in `YYYY-MM-DD` format */
  date: DateStringValue;

  /** Control width and height of the day, `'sm'` by default */
  size?: MantineSize;

  /** Determines whether the day is considered to be a weekend, `false` by default */
  weekend?: boolean;

  /** Determines whether the day is outside of the current month, `false` by default */
  outside?: boolean;

  /** Determines whether the day is selected, `false` by default */
  selected?: boolean;

  /** Determines whether the day should not be displayed, `false` by default */
  hidden?: boolean;

  /** Determines whether the day is selected in range, `false` by default */
  inRange?: boolean;

  /** Determines whether the day is first in range selection, `false` by default */
  firstInRange?: boolean;

  /** Determines whether the day is last in range selection, `false` by default */
  lastInRange?: boolean;

  /** Controls day value rendering */
  renderDay?: RenderDay;

  /** Determines whether today should be highlighted with a border, `false` by default */
  highlightToday?: boolean;
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

export const Day = factory<DayFactory>((_props, ref) => {
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
    vars,
    varsResolver,
    rootSelector: 'day',
  });

  return (
    <UnstyledButton<any>
      {...getStyles('day', { style: hidden ? { display: 'none' } : undefined })}
      component={isStatic ? 'div' : 'button'}
      ref={ref}
      disabled={disabled}
      data-today={dayjs(date).isSame(new Date(), 'day') || undefined}
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
      unstyled={unstyled}
      {...others}
    >
      {renderDay?.(date) || dayjs(date).date()}
    </UnstyledButton>
  );
});

Day.classes = classes;
Day.displayName = '@mantine/dates/Day';
