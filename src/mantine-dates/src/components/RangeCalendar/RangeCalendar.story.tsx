import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RangeCalendar } from './RangeCalendar';

function WrappedRangeCalendar(
  props: Omit<React.ComponentPropsWithoutRef<typeof RangeCalendar>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState<[Date, Date]>([null, null]);
  const [month, setMonth] = useState<Date>(null);

  return (
    <RangeCalendar
      month={month ?? value[0]}
      value={value}
      onChange={onChange}
      onMonthChange={setMonth}
      {...props}
    />
  );
}

storiesOf('@mantine/dates/RangeCalendar', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <WrappedRangeCalendar />
    </div>
  ))
  .add('First day of the week - Sunday', () => (
    <div style={{ padding: 40 }}>
      <WrappedRangeCalendar firstDayOfWeek="sunday" />
    </div>
  ))
  .add('Multiple months', () => (
    <div style={{ padding: 40 }}>
      <WrappedRangeCalendar amountOfMonths={2} />
      <WrappedRangeCalendar amountOfMonths={3} />
    </div>
  ));
