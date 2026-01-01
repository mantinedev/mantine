import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat, DateStringValue, DayOfWeek, ScheduleEventData } from '../../types';
import classes from './MobileMonthView.module.css';

export type MobileMonthViewStylesNames = 'mobileMonthView';
export type MobileMonthViewCssVariables = {
  mobileMonthView: '--mobile-month-view-radius';
};

export interface MobileMonthViewProps
  extends BoxProps, StylesApiProps<MobileMonthViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** If set, week numbers are displayed in the first column @default `false` */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default `true` */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. By default, the first letter of the weekday. */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** Props passed down to the week number button */
  getWeekNumberProps?: (weekStartDate: Date) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: Date) => Record<string, any>;

  /** Called when day is clicked */
  onDayClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked */
  onWeekNumberClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, always renders 6 weeks in the month view @default true */
  consistentWeeks?: boolean;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, days from the previous and next months are displayed to fill the weeks @default `false` */
  withOutsideDays?: boolean;

  /** Events to display */
  events?: ScheduleEventData[];
}

export type MobileMonthViewFactory = Factory<{
  props: MobileMonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MobileMonthViewStylesNames;
  vars: MobileMonthViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'MobileMonthView',
} satisfies Partial<MobileMonthViewProps>;

const varsResolver = createVarsResolver<MobileMonthViewFactory>((_theme, { radius }) => ({
  mobileMonthView: {
    '--mobile-month-view-radius': getRadius(radius),
  },
}));

export const MobileMonthView = factory<MobileMonthViewFactory>((_props) => {
  const props = useProps('MobileMonthView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    __staticSelector,
    date,
    onDateChange,
    withWeekNumbers,
    withWeekDays,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getWeekNumberProps,
    getDayProps,
    onDayClick,
    onWeekNumberClick,
    consistentWeeks,
    highlightToday,
    radius,
    withOutsideDays,
    events,
    ...others
  } = props;

  const getStyles = useStyles<MobileMonthViewFactory>({
    name: __staticSelector,
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
    rootSelector: 'mobileMonthView',
  });

  return <Box {...getStyles('mobileMonthView')} {...others} />;
});

MobileMonthView.displayName = '@mantine/schedule/MobileMonthView';
MobileMonthView.classes = classes;
