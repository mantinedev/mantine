import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RangeCalendar, RangeCalendarProps } from '../RangeCalendar';

function WrappedRangeCalendar(props: Partial<RangeCalendarProps>) {
  const [value, onChange] = useState<[Date, Date]>([null, null]);
  return (
    <div style={{ padding: 40 }}>
      <RangeCalendar value={value} onChange={onChange} {...props} />
    </div>
  );
}

storiesOf('@mantine/dates/RangeCalendar/stories', module)
  .add('First day of the week sunday', () => <WrappedRangeCalendar firstDayOfWeek="sunday" />)
  .add('2 months', () => <WrappedRangeCalendar amountOfMonths={2} />)
  .add('3 months', () => <WrappedRangeCalendar amountOfMonths={3} />);
