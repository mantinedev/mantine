import React from 'react';
import { useMantineDefaultProps } from '@mantine/core';
import { CalendarBase, CalendarBaseProps } from '../CalendarBase/CalendarBase';
import { isSameDate } from '../../utils';

export interface CalendarProps<Multiple extends boolean = false>
  extends Omit<CalendarBaseProps, 'value' | 'onChange'> {
  multiple?: Multiple;
  value?: Multiple extends true ? Date[] : Date | null;
  onChange?(value: Multiple extends true ? Date[] : Date | null): void;
}

const defaultProps: Partial<CalendarProps> = {
  __staticSelector: 'Calendar',
};

export function Calendar<Multiple extends boolean = false>(props: CalendarProps<Multiple>) {
  const {
    __staticSelector = 'Calendar',
    multiple,
    value,
    onChange,
    ...others
  } = useMantineDefaultProps('Calendar', defaultProps, props as any);

  const handleChange = (date: Date) => {
    if (!multiple) {
      return onChange(date);
    }

    const isSelected = value.some((val: Date) => isSameDate(val, date));
    return onChange(
      isSelected ? value.filter((val: Date) => !isSameDate(val, date)) : [...value, date]
    );
  };

  return (
    <CalendarBase
      __staticSelector={__staticSelector}
      onChange={handleChange}
      value={value}
      {...others}
    />
  );
}

Calendar.displayName = '@mantine/dates/Calendar';
