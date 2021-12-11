import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, TextInput } from '@mantine/core';
import { DateRangePicker } from '../DateRangePicker';

storiesOf('@mantine/dates/DateRangePicker/stories', module)
  .add('First day of week sunday', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker
        label="First day of the week - sunday"
        placeholder="Dates range"
        defaultValue={[new Date(), new Date()]}
        firstDayOfWeek="sunday"
        style={{ paddingTop: '10px' }}
      />
    </div>
  ))
  .add('Focus behavior with other inputs', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <TextInput placeholder="Focus me when dropdown is opened" />
      <DateRangePicker placeholder="Pick date" label="Date range picker" mt="xl" />
    </div>
  ))
  .add('2 months', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker label="2 months" placeholder="Dates range" amountOfMonths={2} mt="xl" />
    </div>
  ))
  .add('3 months', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker label="3 months" placeholder="Dates range" amountOfMonths={3} mt="xl" />
    </div>
  ))
  .add('Date format on theme', () => (
    <MantineProvider theme={{ dateFormat: 'MM YYYY DD' }}>
      <DateRangePicker label="First" />
    </MantineProvider>
  ));
