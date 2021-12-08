import React from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/core';
import { CalendarBase, CalendarBaseProps } from './CalendarBase';

function Wrapper(props: Partial<CalendarBaseProps>) {
  return (
    <div style={{ padding: 40 }}>
      <CalendarBase {...props} />
    </div>
  );
}

const getSizes = (props: Partial<CalendarBaseProps>) =>
  MANTINE_SIZES.map((size) => (
    <div style={{ marginTop: 30 }} key={size}>
      <CalendarBase size={size} {...props} />
    </div>
  ));

const today = new Date();

storiesOf('@mantine/dates/CalendarBase/stories', module)
  .add('Single month', () => <Wrapper />)
  .add('2 months', () => <Wrapper amountOfMonths={2} />)
  .add('3 months', () => <Wrapper amountOfMonths={3} />)
  .add('First day of week sunday', () => <Wrapper amountOfMonths={2} firstDayOfWeek="sunday" />)
  .add('Disallow level change', () => <Wrapper amountOfMonths={2} allowLevelChange={false} />)
  .add('Initial level: month', () => <Wrapper amountOfMonths={2} initialLevel="month" />)
  .add('Initial level: year', () => <Wrapper amountOfMonths={2} initialLevel="year" />)
  .add('Sizes: date', () => <div style={{ padding: 40 }}>{getSizes({})}</div>)
  .add('Sizes: month', () => (
    <div style={{ padding: 40 }}>{getSizes({ initialLevel: 'month' })}</div>
  ))
  .add('Sizes: year', () => <div style={{ padding: 40 }}>{getSizes({ initialLevel: 'year' })}</div>)
  .add('Min/max date: year', () => (
    <Wrapper
      amountOfMonths={2}
      minDate={new Date(1994, 0)}
      maxDate={new Date(2038, 0)}
      initialLevel="year"
    />
  ))
  .add('Min/max date: month', () => (
    <Wrapper
      amountOfMonths={2}
      minDate={new Date(2020, 2, 13)}
      maxDate={new Date(2022, 4, 9)}
      initialLevel="month"
    />
  ))
  .add('Min/max date: date', () => (
    <Wrapper
      amountOfMonths={2}
      initialMonth={today}
      minDate={new Date(today.getFullYear(), today.getMonth() - 3, 13)}
      maxDate={new Date(today.getFullYear(), today.getMonth() + 3, 9)}
      initialLevel="date"
    />
  ));
