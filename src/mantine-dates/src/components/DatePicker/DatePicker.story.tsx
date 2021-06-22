import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from './DatePicker';

function Controlled() {
  const [value, onChange] = useState(new Date());

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      placeholder="With month and year"
      label="Date picker"
      withSelect
    />
  );
}

storiesOf('@mantine/dates/DatePicker', module)
  .add('Uncontrolled', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <DatePicker placeholder="Pick date" label="Date picker" />
      <DatePicker
        placeholder="With month and year"
        label="Date picker"
        withSelect
        style={{ marginTop: 20 }}
      />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Controlled />
    </div>
  ));
