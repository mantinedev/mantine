import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { getMonthDays } from '@mantine/dates-utils';
import classes from './MonthView.module.css';

dayjs.extend(weekOfYear);

export type MonthViewStylesNames = 'root' | 'week' | 'day' | 'weekNumber';

export interface MonthViewProps
  extends BoxProps,
    StylesApiProps<MonthViewFactory>,
    ElementProps<'div'> {
  /** Month to display, date string in `YYYY-MM-DD` format */
  month: string;

  /** If set, week numbers are displayed @default `false` */
  withWeekNumbers?: boolean;
}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
}>;

const defaultProps = {} satisfies Partial<MonthViewProps>;

export const MonthView = factory<MonthViewFactory>((_props) => {
  const props = useProps('MonthView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    month,
    withWeekNumbers,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<MonthViewFactory>({
    name: 'MonthView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const weeks = getMonthDays({ month, firstDayOfWeek: 1, consistentWeeks: false }).map(
    (week, index) => {
      const days = week.map((day) => (
        <div {...getStyles('day')} key={day}>
          {dayjs(day).format('D')}
        </div>
      ));

      return (
        <div {...getStyles('week')} key={index}>
          {withWeekNumbers && <div {...getStyles('weekNumber')}>{dayjs(week[0]).week()}</div>}
          {days}
        </div>
      );
    }
  );

  return (
    <Box mod={[{ 'with-week-numbers': withWeekNumbers }, mod]} {...getStyles('root')} {...others}>
      {weeks}
    </Box>
  );
});

MonthView.displayName = '@mantine/core/MonthView';
MonthView.classes = classes;
