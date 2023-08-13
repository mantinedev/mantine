import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesState } from '../../hooks';
import { PickerBaseProps, DatePickerType, CalendarLevel } from '../../types';
import { Calendar, CalendarBaseProps, CalendarSettings, CalendarSystemProps } from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { YearLevelBaseSettings } from '../YearLevel';
import { MonthLevelBaseSettings } from '../MonthLevel';

export interface DatePickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    MonthLevelBaseSettings,
    CalendarBaseProps,
    CalendarSettings {
  /** Max level that user can go up to (decade, year, month), defaults to decade */
  maxLevel?: CalendarLevel;

  /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
  defaultLevel?: CalendarLevel;

  /** Current level displayed to the user (decade, year, month), used for controlled component */
  level?: CalendarLevel;

  /** Called when level changes */
  onLevelChange?(level: CalendarLevel): void;
}

export interface DatePickerProps<Type extends DatePickerType = 'default'>
  extends DatePickerBaseProps<Type>,
    CalendarSystemProps {}

const defaultProps: Partial<DatePickerProps> = {
  type: 'default',
  numberOfColumns: 1,
};

type DatePickerComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerProps<Type>
) => JSX.Element) & { displayName?: string };

export const DatePicker: DatePickerComponent = forwardRef(
  <Type extends DatePickerType = 'default'>(
    props: DatePickerProps<Type>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
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
      ...others
    } = useComponentDefaultProps('DatePicker', defaultProps, props as any);

    const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } =
      useDatesState<Type>({
        type,
        level: 'day',
        allowDeselect,
        allowSingleDateInRange,
        value,
        defaultValue,
        onChange,
        onMouseLeave,
      });

    return (
      <Calendar
        ref={ref}
        minLevel="month"
        __staticSelector={__staticSelector || 'DatePicker'}
        onMouseLeave={onRootMouseLeave}
        hideOutsideDates={numberOfColumns !== 1}
        numberOfColumns={numberOfColumns}
        __onDayMouseEnter={(_event, date) => onHoveredDateChange(date)}
        __onDayClick={(_event, date) => onDateChange(date)}
        getDayProps={(date) => ({
          ...getControlProps(date),
          ...getDayProps?.(date),
        })}
        {...others}
      />
    );
  }
);

DatePicker.displayName = '@mantine/dates/DatePicker';
