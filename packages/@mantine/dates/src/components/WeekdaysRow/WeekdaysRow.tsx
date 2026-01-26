import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getSpacing,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import type { DateLabelFormat, DayOfWeek } from '../../types';
import { useDatesContext } from '../DatesProvider';
import { getWeekdayNames } from './get-weekdays-names/get-weekdays-names';
import classes from './WeekdaysRow.module.css';

export type WeekdaysRowStylesNames = 'weekday' | 'weekdaysRow';
export type WeekdaysRowCssVariables = {
  weekdaysRow: '--wr-fz' | '--wr-spacing';
};

export interface WeekdaysRowProps
  extends BoxProps, StylesApiProps<WeekdaysRowFactory>, ElementProps<'tr'> {
  __staticSelector?: string;

  /** Controls size */
  size?: MantineSize;

  /** dayjs locale */
  locale?: string;

  /** Number 0-6, 0 – Sunday, 6 – Saturday @default 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** dayjs format to get weekday name @default 'dd' */
  weekdayFormat?: DateLabelFormat;

  /** Sets cell type that is used for weekdays @default 'th' */
  cellComponent?: 'td' | 'th';

  /** If set, heading for week numbers is displayed */
  withWeekNumbers?: boolean;
}

export type WeekdaysRowFactory = Factory<{
  props: WeekdaysRowProps;
  ref: HTMLTableRowElement;
  stylesNames: WeekdaysRowStylesNames;
  vars: WeekdaysRowCssVariables;
}>;

const varsResolver = createVarsResolver<WeekdaysRowFactory>((_, { size }) => ({
  weekdaysRow: {
    '--wr-fz': getFontSize(size),
    '--wr-spacing': getSpacing(size),
  },
}));

export const WeekdaysRow = factory<WeekdaysRowFactory>((_props) => {
  const props = useProps('WeekdaysRow', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = 'th',
    __staticSelector,
    withWeekNumbers,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<WeekdaysRowFactory>({
    name: __staticSelector || 'WeekdaysRow',
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
    rootSelector: 'weekdaysRow',
  });

  const ctx = useDatesContext();

  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  }).map((weekday, index) => (
    <CellComponent key={index} {...getStyles('weekday')}>
      {weekday}
    </CellComponent>
  ));

  return (
    <Box component="tr" {...getStyles('weekdaysRow')} {...others}>
      {withWeekNumbers && <CellComponent {...getStyles('weekday')}>#</CellComponent>}
      {weekdays}
    </Box>
  );
});

WeekdaysRow.classes = classes;
WeekdaysRow.displayName = '@mantine/dates/WeekdaysRow';
