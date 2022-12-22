import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesState } from '../../hooks';
import { DecadeLevelSettings } from '../DecadeLevel';
import { YearLevelSettings } from '../YearLevel';
import { PickerBaseProps, DatePickerType } from '../../types';
import { Calendar, CalendarBaseProps, CalendarSystemProps } from '../Calendar';

export interface MonthPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelSettings,
    YearLevelSettings,
    CalendarBaseProps {}

export interface MonthPickerProps<Type extends DatePickerType = 'default'>
  extends MonthPickerBaseProps<Type>,
    CalendarSystemProps {}

const defaultProps: Partial<MonthPickerProps> = {
  type: 'default',
};

type MonthPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: MonthPickerProps<Type>
) => JSX.Element) & { displayName?: string };

export const MonthPicker: MonthPickerComponent = forwardRef(
  <Type extends DatePickerType = 'default'>(
    props: MonthPickerProps<Type>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
      type,
      defaultValue,
      value,
      onChange,
      __staticSelector,
      getMonthControlProps,
      allowSingleDateInRange,
      allowDeselect,
      onMouseLeave,
      onMonthSelect,
      ...others
    } = useComponentDefaultProps('MonthPicker', defaultProps, props as any);

    const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } =
      useDatesState<Type>({
        type,
        level: 'month',
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
        minLevel="year"
        __updateDateOnMonthSelect={false}
        __staticSelector={__staticSelector || 'MonthPicker'}
        onMouseLeave={onRootMouseLeave}
        onMonthMouseEnter={(_event, date) => onHoveredDateChange(date)}
        onMonthSelect={(date) => {
          onDateChange(date);
          onMonthSelect?.(date);
        }}
        getMonthControlProps={(date) => ({
          ...getControlProps(date),
          ...getMonthControlProps?.(date),
        })}
        {...others}
      />
    );
  }
);

MonthPicker.displayName = '@mantine/dates/MonthPicker';
