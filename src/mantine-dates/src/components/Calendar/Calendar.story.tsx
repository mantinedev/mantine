import React, { useState } from 'react';
import { MANTINE_SIZES } from '@mantine/core';
import { storiesOf } from '@storybook/react';
import { Calendar } from './Calendar';
import { RangeCalendar } from './RangeCalendar/RangeCalendar';

function WrappedCalendar(props: React.ComponentPropsWithoutRef<typeof Calendar>) {
  const [value, onChange] = useState(new Date());
  return <Calendar month={value} value={value} onChange={onChange} {...props} />;
}

function WrappedRangeCalendar(props: React.ComponentPropsWithoutRef<typeof Calendar>) {
  const [value, onChange] = useState<[Date, Date]>([null, null]);
  return <RangeCalendar month={value[0]} range={value} onRangeChange={onChange} {...props} />;
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
  .add('Range calendar', () => (
    <div style={{ padding: 40 }}>
      <WrappedRangeCalendar />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>);
