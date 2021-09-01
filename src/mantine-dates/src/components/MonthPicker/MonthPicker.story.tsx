import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {MonthPicker, MonthPickerProps} from './MonthPicker'

const Controlled:React.FC<MonthPickerProps> = () => {
  const [value, onChange] = useState(new Date());

  return (
    <MonthPicker
      value={value}
      onChange={onChange}
      placeholder="Just month and year"
      label="Month picker"
      withSelect
    />
  );
}

storiesOf('@mantine/dates/MonthPicker', module)
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Controlled />
    </div>
  ));
