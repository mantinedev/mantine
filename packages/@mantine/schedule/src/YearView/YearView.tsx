import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { getMonthsByQuarter } from '@mantine/dates-utils';
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

export type YearViewVariant = string;
export type YearViewCssVariables = {
  yearView: '--test';
};

export interface YearViewProps
  extends YearViewMonthSettings,
    BoxProps,
    StylesApiProps<YearViewFactory>,
    ElementProps<'div'> {
  /** Year to display, Date object or date string in `YYYY-MM-DD` format */
  year: Date | string;
}

export type YearViewFactory = Factory<{
  props: YearViewProps;
  ref: HTMLDivElement;
  stylesNames: YearViewStylesNames;
  vars: YearViewCssVariables;
  variant: YearViewVariant;
}>;

const defaultProps = {
  monthLabelFormat: 'MMMM',
  withWeekDays: true,
  weekdayFormat: 'dd',
} satisfies Partial<YearViewProps>;

const varsResolver = createVarsResolver<YearViewFactory>(() => ({
  yearView: {
    '--test': 'test',
  },
}));

export const YearView = factory<YearViewFactory>((_props) => {
  const props = useProps('YearView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,

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

    ...others
  } = props;

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
          weekdayFormat={weekdayFormat}
          weekendDays={weekendDays}
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
