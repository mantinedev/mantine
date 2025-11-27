import {
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

export type MonthYearSelectStylesNames =
  | 'monthYearSelectTarget'
  | 'monthYearSelectDropdown'
  | 'monthYearSelectControl';

export type MonthYearSelectCssVariables = {
  root: '--test';
};

export interface MonthYearSelectProps
  extends BoxProps,
    StylesApiProps<MonthYearSelectFactory>,
    ElementProps<'button'> {
  __staticSelector?: string;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** Props passed down to the underlying Popover component */
  popoverProps?: PopoverProps;

  /** Start year for year selection, calculated from the current date by default */
  startYear?: number;

  /** End year for year selection, calculated from the current date by default */
  endYear?: number;

  /** Current year value (e.g. `2025`) */
  yearValue?: number;

  /** Current month value (0-11) */
  monthValue?: number;

  /** Called with year value (e.g. `2025`) when year is selected in the dropdown */
  onYearChange?: (year: number) => void;

  /** Called with month value (0-11) when month is selected in the dropdown */
  onMonthChange?: (month: number) => void;

  /** Format for displaying months in the dropdown, dayjs format or custom formatter function @default `'MMM'` */
  monthsListFormat?: DateLabelFormat;
}

export type MonthYearSelectFactory = Factory<{
  props: MonthYearSelectProps;
  ref: HTMLButtonElement;
  stylesNames: MonthYearSelectStylesNames;
  vars: MonthYearSelectCssVariables;
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
    __staticSelector,
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
    monthValue,
    yearValue,
    ...others
  } = props;

  const getStyles = useStyles<MonthYearSelectFactory>({
    name: __staticSelector || 'MonthYearSelect',
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
    rootSelector: 'monthYearSelectTarget',
  });

  const today = new Date();
  const ctx = useScheduleContext();

  const years = getYearsList({
    startYear: startYear || today.getFullYear() - 5,
    endYear: endYear || today.getFullYear() + 5,
  }).map((year) => (
    <UnstyledButton
      key={year}
      onClick={() => onYearChange?.(year)}
      mod={{ type: 'year', active: year === yearValue }}
      {...getStyles('monthYearSelectControl')}
    >
      {year}
    </UnstyledButton>
  ));

  const months = getMonthsList({
    locale: ctx.getLocale(locale),
    format: monthsListFormat || 'MMMM',
  }).map((month) => (
    <UnstyledButton
      key={month.name}
      onClick={() => onMonthChange?.(month.month)}
      mod={{ type: 'month', active: month.month === monthValue }}
      {...getStyles('monthYearSelectControl')}
    >
      {month.name}
    </UnstyledButton>
  ));

  return (
    <Popover
      position="bottom-start"
      transitionProps={{ duration: 0 }}
      __staticSelector={__staticSelector}
      {...popoverProps}
    >
      <Popover.Target>
        <ScheduleHeaderControl
          {...getStyles('monthYearSelectTarget')}
          __staticSelector={__staticSelector}
          {...others}
        >
          Hello
        </ScheduleHeaderControl>
      </Popover.Target>
      <Popover.Dropdown {...getStyles('monthYearSelectDropdown')}>
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
  );
});

MonthYearSelect.displayName = '@mantine/schedule/MonthYearSelect';
MonthYearSelect.classes = classes;
