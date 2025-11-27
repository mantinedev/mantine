import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  Popover,
  PopoverProps,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat } from '../../../types';
import { getMonthsList, getYearsList } from '../../../utils';
import { useScheduleContext } from '../../Schedule/Schedule.context';
import { ScheduleHeaderControl } from '../ScheduleHeaderControl';
import classes from './MonthYearSelect.module.css';

export type MonthYearSelectStylesNames = 'root';
export type MonthYearSelectVariant = string;
export type MonthYearSelectCssVariables = {
  root: '--test';
};

export interface MonthYearSelectProps
  extends BoxProps,
    StylesApiProps<MonthYearSelectFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** Props passed down to the underlying Popover component */
  popoverProps?: PopoverProps;

  /** Start year for year selection, calculated from the current date by default */
  startYear?: number;

  /** End year for year selection, calculated from the current date by default */
  endYear?: number;

  /** Called with year value (e.g. `2025`) when year is selected in the dropdown */
  onYearChange?: (year: number) => void;

  /** Called with month value (0-11) when month is selected in the dropdown */
  onMonthChange?: (month: number) => void;

  /** Format for displaying months in the dropdown, dayjs format or custom formatter function @default `'MMM'` */
  monthsListFormat?: DateLabelFormat;
}

export type MonthYearSelectFactory = Factory<{
  props: MonthYearSelectProps;
  ref: HTMLDivElement;
  stylesNames: MonthYearSelectStylesNames;
  vars: MonthYearSelectCssVariables;
  variant: MonthYearSelectVariant;
}>;

const defaultProps = {} satisfies Partial<MonthYearSelectProps>;

const varsResolver = createVarsResolver<MonthYearSelectFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const MonthYearSelect = factory<MonthYearSelectFactory>((_props) => {
  const props = useProps('MonthYearSelect', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    popoverProps,
    startYear,
    endYear,
    onYearChange,
    onMonthChange,
    locale,
    monthsListFormat,
    ...others
  } = props;

  const getStyles = useStyles<MonthYearSelectFactory>({
    name: 'MonthYearSelect',
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
  });

  const today = new Date();
  const ctx = useScheduleContext();

  const years = getYearsList({
    startYear: startYear || today.getFullYear() - 5,
    endYear: endYear || today.getFullYear() + 5,
  }).map((year) => (
    <UnstyledButton key={year} onClick={() => onYearChange?.(year)}>
      {year}
    </UnstyledButton>
  ));

  const months = getMonthsList({
    locale: ctx.getLocale(locale),
    format: monthsListFormat || 'MMMM',
  }).map((month) => (
    <UnstyledButton key={month.name} onClick={() => onMonthChange?.(month.month)}>
      {month.name}
    </UnstyledButton>
  ));

  return (
    <Box {...getStyles('root')} {...others}>
      <Popover position="bottom-start" transitionProps={{ duration: 0 }} {...popoverProps}>
        <Popover.Target>
          <ScheduleHeaderControl>Hello</ScheduleHeaderControl>
        </Popover.Target>
        <Popover.Dropdown>
          <div>
            <div>{ctx.labels.month}</div>
            {months}
          </div>
          <div>
            <div>{ctx.labels.year}</div>
            {years}
          </div>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
});

MonthYearSelect.displayName = '@mantine/core/MonthYearSelect';
MonthYearSelect.classes = classes;
