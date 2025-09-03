import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './MiniCalendar.module.css';

export type MiniCalendarStylesNames = 'root';
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

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

MiniCalendar.displayName = '@mantine/core/MiniCalendar';
MiniCalendar.classes = classes;
