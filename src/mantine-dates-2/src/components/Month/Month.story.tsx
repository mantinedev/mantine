import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Code, Indicator } from '@mantine/core';
import { Month, MonthProps } from './Month';

export default { title: 'Month' };

function Wrapper(props: Partial<MonthProps>) {
  return (
    <div style={{ padding: 40 }}>
      <Code>{dayjs(props.month || new Date(2022, 3, 1)).format('MMMM YYYY')}</Code>
      <Month month={new Date(2022, 3, 1)} mt="xl" {...props} />
    </div>
  );
}

export function Usage() {
  return <Wrapper />;
}

export function CustomWeekendDays() {
  return <Wrapper weekendDays={[3, 4]} />;
}

export function Selected() {
  const [selected, setSelected] = useState<Date>(null);
  return (
    <Wrapper
      getDayProps={(date) => ({
        selected: dayjs(date).isSame(selected, 'date'),
        onClick: () => setSelected(date),
      })}
    />
  );
}

export function CustomDayOfWeek() {
  return <Wrapper firstDayOfWeek={6} />;
}

export function ExcludeDate() {
  return <Wrapper excludeDate={(date) => date.getDay() === 0} />;
}

export function MinMaxDate() {
  return <Wrapper minDate={new Date(2022, 3, 10)} maxDate={new Date(2022, 3, 22)} />;
}

export function RenderDay() {
  return (
    <Wrapper
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-3} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}

export function HideOutsideDates() {
  return <Wrapper hideOutsideDates />;
}

export function HideWeekdays() {
  return <Wrapper hideWeekdays />;
}

export function Static() {
  return <Wrapper static />;
}

export function Unstyled() {
  return <Wrapper unstyled />;
}
