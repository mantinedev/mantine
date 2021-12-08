import React from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/core';
import { CalendarBase, CalendarProps } from './CalendarBase';

function Wrapper(props: Partial<CalendarProps>) {
  return (
    <div style={{ padding: 40 }}>
      <CalendarBase {...props} />
    </div>
  );
}

const sizes = MANTINE_SIZES.map((size) => (
  <div style={{ marginTop: 30 }} key={size}>
    <CalendarBase size={size} />
  </div>
));

storiesOf('@mantine/dates/CalendarBase', module)
  .add('Single month', () => <Wrapper />)
  .add('2 months', () => <Wrapper amountOfMonths={2} />)
  .add('3 months', () => <Wrapper amountOfMonths={3} />)
  .add('First day of week sunday', () => <Wrapper amountOfMonths={2} firstDayOfWeek="sunday" />)
  .add('Disallow level change', () => <Wrapper amountOfMonths={2} allowLevelChange={false} />)
  .add('Initial level: month', () => <Wrapper amountOfMonths={2} initialLevel="month" />)
  .add('Initial level: year', () => <Wrapper amountOfMonths={2} initialLevel="year" />)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>);
