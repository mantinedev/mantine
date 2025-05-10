import dayjs from 'dayjs';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineComponentStaticProperties,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDatesState } from '../../hooks';
import { CalendarLevel, DatePickerType, PickerBaseProps } from '../../types';
import { Calendar, CalendarBaseProps, CalendarSettings, CalendarStylesNames } from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { isSameMonth } from '../Month';
import { MonthLevelBaseSettings } from '../MonthLevel';
import { YearLevelBaseSettings } from '../YearLevel';

export type DatePickerStylesNames = CalendarStylesNames;

export interface DatePickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    MonthLevelBaseSettings,
    CalendarBaseProps,
    Omit<CalendarSettings, 'hasNextLevel'> {
  /** Max level that user can go up to, `'decade'` by default */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) */
  level?: CalendarLevel;

  /** Called when level changes */
  onLevelChange?: (level: CalendarLevel) => void;
}

export interface DatePickerProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {}

export type DatePickerFactory = Factory<{
  props: DatePickerProps;
  ref: HTMLDivElement;
  stylesNames: DatePickerStylesNames;
}>;

const defaultProps = {
  type: 'default',
  defaultLevel: 'month',
  numberOfColumns: 1,
} satisfies Partial<DatePickerProps>;

type DatePickerComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerProps<Type> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<DatePickerFactory>;

export const DatePicker: DatePickerComponent = factory<DatePickerFactory>((_props, ref) => {
  const props = useProps('DatePicker', defaultProps, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getDayProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    numberOfColumns,
    hideOutsideDates,
    __onDayMouseEnter,
    __onDayClick,
    getYearControlProps,
    getMonthControlProps,
    ...others
  } = props;

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps, _value } =
    useDatesState({
      type: type as any,
      level: 'day',
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange: onChange as any,
      onMouseLeave,
    });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DatePickerFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Calendar
      ref={ref}
      minLevel="month"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector={__staticSelector || 'DatePicker'}
      onMouseLeave={onRootMouseLeave}
      numberOfColumns={numberOfColumns}
      hideOutsideDates={hideOutsideDates ?? numberOfColumns !== 1}
      __onDayMouseEnter={(_event, date) => {
        onHoveredDateChange(date);
        __onDayMouseEnter?.(_event, date);
      }}
      __onDayClick={(_event, date) => {
        onDateChange(date);
        __onDayClick?.(_event, date);
      }}
      getDayProps={(date) => ({
        ...getControlProps(date),
        ...getDayProps?.(date),
      })}
      getMonthControlProps={(date) => ({
        selected: typeof _value === 'string' ? isSameMonth(date, _value) : false,
        ...getMonthControlProps?.(date),
      })}
      getYearControlProps={(date) => ({
        selected: typeof _value === 'string' ? dayjs(date).isSame(_value, 'year') : false,
        ...getYearControlProps?.(date),
      })}
      {...others}
    />
  );
}) as any;

DatePicker.classes = Calendar.classes;
DatePicker.displayName = '@mantine/dates/DatePicker';
