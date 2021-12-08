import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CalendarBase } from './CalendarBase';
import { YearPicker } from './YearPicker/YearPicker';

function YearPickerWrapper() {
  const [year, setYear] = useState(2021);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPicker value={year} onChange={setYear} />
    </div>
  );
}

storiesOf('@mantine/dates/CalendarBase', module)
  .add('Single month', () => (
    <div style={{ padding: 40 }}>
      <CalendarBase />
    </div>
  ))
  .add('2 months', () => (
    <div style={{ padding: 40 }}>
      <CalendarBase amountOfMonths={2} />
    </div>
  ))
  .add('3 months', () => (
    <div style={{ padding: 40 }}>
      <CalendarBase amountOfMonths={3} />
    </div>
  ))
  .add('First day of week sunday', () => (
    <div style={{ padding: 40 }}>
      <CalendarBase amountOfMonths={3} firstDayOfWeek="sunday" />
    </div>
  ))
  .add('Disallow level change', () => (
    <div style={{ padding: 40 }}>
      <CalendarBase amountOfMonths={2} allowLevelChange={false} />
    </div>
  ))
  .add('YearPicker', () => <YearPickerWrapper />);
