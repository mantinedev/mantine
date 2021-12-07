import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalendarBase } from './CalendarBase';

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
  ));
