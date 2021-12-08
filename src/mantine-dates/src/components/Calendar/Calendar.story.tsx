import React, { useState } from 'react';
import { MANTINE_SIZES } from '@mantine/core';
import { storiesOf } from '@storybook/react';
import { Calendar } from './Calendar';

function WrappedCalendar(props: React.ComponentPropsWithoutRef<typeof Calendar>) {
  const [value, onChange] = useState(new Date());
  return <Calendar value={value} onChange={onChange} {...props} />;
}

const sizes = MANTINE_SIZES.map((size) => (
  <WrappedCalendar size={size} key={size} style={{ marginTop: 30 }} />
));

storiesOf('@mantine/dates/Calendar/stories', module)
  .add('No outside events', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar disableOutsideEvents />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('First day of the week sunday', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar minDate={new Date()} firstDayOfWeek="sunday" />
    </div>
  ))
  .add('2 months', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar amountOfMonths={2} />
    </div>
  ))
  .add('3 months', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar amountOfMonths={3} />
    </div>
  ));
