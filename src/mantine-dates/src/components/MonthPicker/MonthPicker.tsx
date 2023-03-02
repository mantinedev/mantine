import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesState } from '../../hooks';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { YearLevelBaseSettings } from '../YearLevel';
import { PickerBaseProps, DatePickerType, CalendarLevel } from '../../types';
import { Calendar, CalendarBaseProps, CalendarSystemProps } from '../Calendar';

type MonthPickerLevel = Exclude<CalendarLevel, 'month'>;

export interface MonthPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    Omit<CalendarBaseProps, 'onNextMonth' | 'onPreviousMonth'> {
  /** Max level that user can go up to (decade, year), defaults to decade */
  maxLevel?: MonthPickerLevel;

  /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
  defaultLevel?: MonthPickerLevel;

  /** Current level displayed to the user (decade, year, month), used for controlled component */
  level?: MonthPickerLevel;

  /** Called when level changes */
  onLevelChange?(level: MonthPickerLevel): void;
}

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
