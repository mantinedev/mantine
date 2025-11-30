import {
  BoxProps,
  createScopedKeydownHandler,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  Popover,
  PopoverProps,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat } from '../../../types';
import { formatDate, getMonthsList, getYearsList } from '../../../utils';
import { useScheduleContext } from '../../Schedule/Schedule.context';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import classes from './MonthYearSelect.module.css';

export type MonthYearSelectStylesNames =
  | 'monthYearSelectTarget'
  | 'monthYearSelectDropdown'
  | 'monthYearSelectControl'
  | 'monthYearSelectList'
  | 'monthYearSelectLabel';

export type MonthYearSelectCssVariables = {
  monthYearSelectDropdown: '--control-radius';
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

  /** Format for displaying month label in the control, dayjs format @default `'MMMM YYYY'` */
  labelFormat?: DateLabelFormat;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Props passed down to year controls */
  getYearControlProps?: (year: number) => React.ComponentProps<'button'> & DataAttributes;

  /** Props passed down to month controls */
  getMonthControlProps?: (month: number) => React.ComponentProps<'button'> & DataAttributes;

  /** If set to false, months are not displayed in the dropdown @default true */
  withMonths?: boolean;
}

export type MonthYearSelectFactory = Factory<{
  props: MonthYearSelectProps;
  ref: HTMLButtonElement;
  stylesNames: MonthYearSelectStylesNames;
  vars: MonthYearSelectCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'MonthYearSelect',
  withMonths: true,
} satisfies Partial<MonthYearSelectProps>;

const varsResolver = createVarsResolver<MonthYearSelectFactory>((_theme, { radius }) => ({
  monthYearSelectDropdown: {
    '--control-radius': radius === undefined ? undefined : getRadius(radius),
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
    labelFormat,
    radius,
    getMonthControlProps,
    getYearControlProps,
    withMonths,
    ...others
  } = props;

  const getStyles = useStyles<MonthYearSelectFactory>({
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
    rootSelector: 'monthYearSelectTarget',
  });

  const today = new Date();
  const ctx = useScheduleContext();
  const _startYear = startYear ?? today.getFullYear() - 5;
  const _endYear = endYear ?? today.getFullYear() + 5;
  const hasActiveYear = yearValue !== undefined && yearValue >= _startYear && yearValue <= _endYear;

  const years = getYearsList({ startYear: _startYear, endYear: _endYear }).map((year, index) => {
    const controlProps = getYearControlProps?.(year);
    return (
      <UnstyledButton
        key={year}
        onClick={() => onYearChange?.(year)}
        mod={{ type: 'year', active: year === yearValue }}
        aria-label={`${ctx.labels.selectYear} ${year}`}
        tabIndex={hasActiveYear ? (year === yearValue ? 0 : -1) : index === 0 ? 0 : -1}
        {...controlProps}
        onKeyDown={createScopedKeydownHandler({
          siblingSelector: '[data-type="year"]:not(:disabled)',
          parentSelector: '[data-list]',
          activateOnFocus: false,
          loop: true,
          orientation: 'vertical',
          onKeyDown: controlProps?.onKeyDown,
        })}
        {...getStyles('monthYearSelectControl', {
          className: controlProps?.className,
          style: controlProps?.style,
        })}
      >
        {year}
      </UnstyledButton>
    );
  });

  const months = withMonths
    ? getMonthsList({
        locale: ctx.getLocale(locale),
        format: monthsListFormat || 'MMMM',
      }).map((month) => {
        const controlProps = getMonthControlProps?.(month.month);
        return (
          <UnstyledButton
            key={month.name}
            onClick={() => onMonthChange?.(month.month)}
            mod={{ type: 'month', active: month.month === monthValue }}
            tabIndex={month.month === monthValue ? 0 : -1}
            onKeyDown={createScopedKeydownHandler({
              siblingSelector: '[data-type="month"]:not(:disabled)',
              parentSelector: '[data-list]',
              activateOnFocus: false,
              loop: true,
              orientation: 'vertical',
              onKeyDown: controlProps?.onKeyDown,
            })}
            {...controlProps}
            {...getStyles('monthYearSelectControl', {
              className: controlProps?.className,
              style: controlProps?.style,
            })}
            aria-label={`${ctx.labels.selectMonth} ${month.name}`}
          >
            {month.name}
          </UnstyledButton>
        );
      })
    : null;

  return (
    <Popover
      position="bottom-start"
      __staticSelector={__staticSelector}
      trapFocus
      transitionProps={{ transition: 'pop-top-left', duration: 120 }}
      radius={radius || 'var(--schedule-radius, var(--mantine-radius-default))'}
      shadow="md"
      offset={3}
      width={withMonths ? undefined : 'target'}
      {...popoverProps}
    >
      <Popover.Target>
        <HeaderControl
          {...getStyles('monthYearSelectTarget')}
          __staticSelector={__staticSelector}
          radius={radius}
          data-with-months={withMonths || undefined}
          {...others}
        >
          {formatDate({
            locale: ctx.getLocale(locale),
            date: new Date(yearValue ?? today.getFullYear(), monthValue ?? today.getMonth()),
            format: labelFormat || (withMonths ? 'MMMM YYYY' : 'YYYY'),
          })}
        </HeaderControl>
      </Popover.Target>

      <Popover.Dropdown
        data-with-months={withMonths || undefined}
        {...getStyles('monthYearSelectDropdown')}
      >
        {withMonths && (
          <div data-list {...getStyles('monthYearSelectList')}>
            <div {...getStyles('monthYearSelectLabel')}>{ctx.labels.month}</div>
            {months}
          </div>
        )}
        <div data-list {...getStyles('monthYearSelectList')}>
          {withMonths && <div {...getStyles('monthYearSelectLabel')}>{ctx.labels.year}</div>}
          {years}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
});

MonthYearSelect.displayName = '@mantine/schedule/MonthYearSelect';
MonthYearSelect.classes = classes;
