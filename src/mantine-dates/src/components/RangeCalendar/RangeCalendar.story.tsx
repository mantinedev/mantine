import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RangeCalendar } from './RangeCalendar';

function WrappedRangeCalendar(
  props: Omit<React.ComponentPropsWithoutRef<typeof RangeCalendar>, 'value' | 'onChange'>
) {
  const [value, onChange] = useState<[Date, Date]>([null, null]);
  return <RangeCalendar month={value[0]} value={value} onChange={onChange} {...props} />;
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
  ));
