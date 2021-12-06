import React, { useState } from 'react';
import { MANTINE_SIZES } from '@mantine/core';
import { storiesOf } from '@storybook/react';
import { Calendar } from './Calendar';

function WrappedCalendar(props: React.ComponentPropsWithoutRef<typeof Calendar>) {
  const [value, onChange] = useState(new Date());
  return <Calendar value={value} onChange={onChange} {...props} />;
}

const sizes = MANTINE_SIZES.map((size) => (
  <WrappedCalendar size={size} key={size} style={{ marginTop: 30 }} withSelect />
));

storiesOf('@mantine/dates/Calendar', module)
  .add('General usage', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar minDate={new Date()} />
      <WrappedCalendar maxDate={new Date()} />
      <WrappedCalendar withSelect disableOutsideEvents style={{ marginTop: 40 }} />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('First day of the week', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar minDate={new Date()} firstDayOfWeek="monday" />
      <WrappedCalendar minDate={new Date()} firstDayOfWeek="sunday" />
    </div>
  ))
  .add('Amount of months', () => (
    <div style={{ padding: 40, width: 400 }}>
      <WrappedCalendar minDate={new Date()} amountOfMonths={1} />
      <WrappedCalendar minDate={new Date()} amountOfMonths={2} />
      <WrappedCalendar minDate={new Date()} amountOfMonths={3} />
    </div>
  ));
