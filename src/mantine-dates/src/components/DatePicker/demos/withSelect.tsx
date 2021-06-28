import React from 'react';
import { DatePicker } from '../DatePicker';

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  withSelect
  yearsRange={{ from: 2020, to: 2025 }}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        withSelect
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 11, 31)}
        yearsRange={{ from: 2020, to: 2025 }}
      />
    </div>
  );
}

export const withSelect: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
