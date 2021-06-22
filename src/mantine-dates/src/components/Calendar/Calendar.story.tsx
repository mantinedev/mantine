import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Calendar } from './Calendar';

function WrappedCalendar(props: React.ComponentPropsWithoutRef<typeof Calendar>) {
  const [value, onChange] = useState(new Date());
  return <Calendar month={value} value={value} onChange={onChange} {...props} />;
}

storiesOf('@mantine/dates/Calendar', module).add('General usage', () => (
  <div style={{ padding: 40, width: 400 }}>
    <WrappedCalendar minDate={new Date()} />
    <WrappedCalendar maxDate={new Date()} />
    <WrappedCalendar withSelect disableOutsideEvents style={{ marginTop: 40 }} />
  </div>
));
