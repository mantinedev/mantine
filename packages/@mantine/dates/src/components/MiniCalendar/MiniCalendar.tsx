import dayjs from 'dayjs';
import {
  AccordionChevron,
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { toDateString } from '../../utils';
import classes from './MiniCalendar.module.css';

export type MiniCalendarStylesNames =
  | 'root'
  | 'control'
  | 'days'
  | 'day'
  | 'dayMonth'
  | 'dayNumber';

export type MiniCalendarCssVariables = {
  root: '--test';
};

export interface MiniCalendarProps
  extends BoxProps,
    StylesApiProps<MiniCalendarFactory>,
    ElementProps<'div', 'onChange' | 'defaultValue'> {
  /** Controlled component date value, start date of the interval */
  date?: Date | string;

  /** Uncontrolled component default value, start date of the interval */
  defaultDate?: Date | string;

  /** Called with date in `YYYY-MM-DD` format when date internal changes */
  onDateChange?: (date: string) => void;

  /** Selected date, controlled value */
  value?: Date | string;

  /** Uncontrolled component default value, selected date */
  defaultValue?: Date | string;

  /** Called with date in `YYYY-MM-DD` format when date changes */
  onChange?: (date: string) => void;

  /** Maximum date that can be selected, date object or date string in `YYYY-MM-DD` format */
  maxDate?: Date | string;

  /** Minimum date that can be selected, date object or date string in `YYYY-MM-DD` format */
  minDate?: Date | string;

  /** Number of days to display in the calendar @default 7 */
  numberOfDays?: number;

  /** Dayjs format string for month label @default `MMM` */
  monthLabelFormat?: string;

  /** Called when the next button is clicked */
  onNext?: () => void;

  /** Called when the previous button is clicked */
  onPrevious?: () => void;

  /** Props passed down to the day component */
  getDayProps?: (date: string) => Record<string, any>;

  /** Component size @default 'sm' */
  size?: MantineSize;

  /** Props passed to previous control button */
  previousControlProps?: React.ComponentPropsWithoutRef<'button'> & DataAttributes;

  /** Props passed to next control button */
  nextControlProps?: React.ComponentPropsWithoutRef<'button'> & DataAttributes;
}

export type MiniCalendarFactory = Factory<{
  props: MiniCalendarProps;
  ref: HTMLDivElement;
  stylesNames: MiniCalendarStylesNames;
  vars: MiniCalendarCssVariables;
}>;

const defaultProps = {
  size: 'sm',
  numberOfDays: 7,
  monthLabelFormat: 'MMM',
} satisfies Partial<MiniCalendarProps>;

const varsResolver = createVarsResolver<MiniCalendarFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const MiniCalendar = factory<MiniCalendarFactory>((_props, ref) => {
  const props = useProps('MiniCalendar', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    defaultDate,
    onDateChange,
    value,
    defaultValue,
    onChange,
    onNext,
    onPrevious,
    getDayProps,
    numberOfDays,
    size,
    minDate,
    maxDate,
    monthLabelFormat,
    nextControlProps,
    previousControlProps,
    ...others
  } = props;

  const getStyles = useStyles<MiniCalendarFactory>({
    name: 'MiniCalendar',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const [_date, setDate] = useUncontrolled({
    value: toDateString(date),
    defaultValue: toDateString(defaultDate),
    finalValue: toDateString(value) || dayjs().format('YYYY-MM-DD'),
    onChange: onDateChange,
  });

  const handleNext = () => {
    onNext?.();
    const nextDate = dayjs(_date).add(numberOfDays, 'days');
    setDate(toDateString(nextDate));
  };

  const handlePrevious = () => {
    onPrevious?.();
    const previousDate = dayjs(_date).subtract(numberOfDays, 'days');
    setDate(toDateString(previousDate));
  };

  const previousDisabled = minDate
    ? dayjs(_date).subtract(numberOfDays, 'days').isBefore(dayjs(minDate))
    : false;

  const nextDisabled = maxDate
    ? dayjs(_date).add(numberOfDays, 'days').isAfter(dayjs(maxDate))
    : false;

  const range = Array(numberOfDays)
    .fill(0)
    .map((_, index) => dayjs(_date).add(index, 'days'))
    .map((date) => {
      const disabled =
        (minDate && date.isBefore(dayjs(minDate), 'day')) ||
        (maxDate && date.isAfter(dayjs(maxDate), 'day')) ||
        false;

      const dayProps = getDayProps?.(toDateString(date));

      return (
        <UnstyledButton
          key={date.toString()}
          disabled={disabled}
          data-disabled={disabled || undefined}
          {...dayProps}
          {...getStyles('day', {
            active: !disabled,
            className: dayProps?.className,
            style: dayProps?.style,
          })}
        >
          <span {...getStyles('dayMonth')}>{date.format(monthLabelFormat)}</span>
          <span {...getStyles('dayNumber')}>{date.date()}</span>
        </UnstyledButton>
      );
    });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      <UnstyledButton
        size={size}
        onClick={handlePrevious}
        disabled={previousDisabled}
        data-disabled={previousDisabled || undefined}
        data-direction="previous"
        {...previousControlProps}
        {...getStyles('control', {
          active: !previousDisabled,
          className: previousControlProps?.className,
          style: previousControlProps?.style,
        })}
      >
        {previousControlProps?.children || <AccordionChevron data-chevron />}
      </UnstyledButton>

      <div {...getStyles('days')}>{range}</div>

      <UnstyledButton
        size={size}
        onClick={handleNext}
        disabled={nextDisabled}
        data-disabled={nextDisabled || undefined}
        data-direction="next"
        {...nextControlProps}
        {...getStyles('control', {
          active: !nextDisabled,
          className: nextControlProps?.className,
          style: nextControlProps?.style,
        })}
      >
        {nextControlProps?.children || <AccordionChevron data-chevron />}
      </UnstyledButton>
    </Box>
  );
});

MiniCalendar.displayName = '@mantine/core/MiniCalendar';
MiniCalendar.classes = classes;
