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
import { DateLabelFormat, DayOfWeek } from '../../types';
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

  /** Number 0-6, 0 – Sunday, 6 – Saturday. The default value is defined by `DatesProvider`. */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format string or a function that receives a weekday date in `YYYY-MM-DD` format and returns the weekday label @default 'dd' */
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
  const scope = CellComponent === 'th' ? 'col' : undefined;

  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  }).map((weekday, index) => (
    <CellComponent key={index} scope={scope} {...getStyles('weekday')}>
      {weekday}
    </CellComponent>
  ));

  return (
    <Box component="tr" {...getStyles('weekdaysRow')} {...others}>
      {withWeekNumbers && (
        <CellComponent scope={scope} {...getStyles('weekday')}>
          #
        </CellComponent>
      )}
      {weekdays}
    </Box>
  );
});

WeekdaysRow.classes = classes;
WeekdaysRow.varsResolver = varsResolver;
WeekdaysRow.displayName = '@mantine/dates/WeekdaysRow';
