import dayjs from 'dayjs';
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
import { getMonthsByQuarter } from '../../utils';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { YearViewMonth, YearViewMonthSettings } from './YearViewMonth';
import classes from './YearView.module.css';

export type YearViewStylesNames =
  | 'yearView'
  | 'yearViewMonth'
  | 'yearViewWeekday'
  | 'yearViewDay'
  | 'yearViewWeek'
  | 'yearViewWeekNumber'
  | 'yearViewWeekdays'
  | 'yearViewWeekdaysCorner'
  | 'yearViewMonthCaption'
  | 'yearViewQuarter';

export type YearViewCssVariables = {
  yearView: '--year-view-radius';
};

export interface YearViewProps
  extends YearViewMonthSettings,
    BoxProps,
    StylesApiProps<YearViewFactory>,
    ElementProps<'div'> {
  /** Year to display, Date object or date string in `YYYY-MM-DD` format */
  year: Date | string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;
}

export type YearViewFactory = Factory<{
  props: YearViewProps;
  ref: HTMLDivElement;
  stylesNames: YearViewStylesNames;
  vars: YearViewCssVariables;
}>;

const defaultProps = {
  monthLabelFormat: 'MMMM',
  withWeekDays: true,
  highlightToday: true,
} satisfies Partial<YearViewProps>;

const varsResolver = createVarsResolver<YearViewFactory>((_theme, { radius }) => ({
  yearView: { '--year-view-radius': radius ? getRadius(radius) : undefined },
}));

export const YearView = factory<YearViewFactory>((_props) => {
  const props = useProps('YearView', defaultProps, _props);
  const {
    // YearView props
    year,

    // YearViewMonth settings
    monthLabelFormat,
    withWeekNumbers,
    withWeekDays,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    onMonthClick,
    onDayClick,
    onWeekNumberClick,
    getDayProps,
    getWeekNumberProps,
    highlightToday,

    // System props
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    ...others
  } = props;

  const ctx = useScheduleContext();

  const getStyles = useStyles<YearViewFactory>({
    name: 'YearView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    attributes,
    rootSelector: 'yearView',
  });

  const months = getMonthsByQuarter(dayjs(year).format('YYYY-MM-DD')).map(
    (quarter, quarterIndex) => {
      const months = quarter.map((month) => (
        <YearViewMonth
          key={month}
          month={month}
          getStyles={getStyles}
          monthLabelFormat={monthLabelFormat}
          withWeekNumbers={withWeekNumbers}
          withWeekDays={withWeekDays}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          weekdayFormat={
            weekdayFormat ||
            ((date) => dayjs(date).locale(ctx.getLocale(locale)).format('dd').slice(0, 1))
          }
          weekendDays={weekendDays}
          getDayProps={getDayProps}
          getWeekNumberProps={getWeekNumberProps}
          onMonthClick={onMonthClick}
          onDayClick={onDayClick}
          onWeekNumberClick={onWeekNumberClick}
          highlightToday={highlightToday}
        />
      ));

      return (
        <div {...getStyles('yearViewQuarter')} key={quarterIndex}>
          {months}
        </div>
      );
    }
  );

  return (
    <Box {...getStyles('yearView')} {...others}>
      {months}
    </Box>
  );
});

YearView.displayName = '@mantine/schedule/YearView';
YearView.classes = classes;
