/* eslint-disable no-console */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, TextInput } from '@mantine/core';
import { DateRangePicker } from './DateRangePicker';

function Controlled() {
  const [range, setRange] = useState<[Date, Date]>([new Date(2021, 11, 1), new Date(2021, 11, 5)]);
  return (
    <DateRangePicker
      value={range}
      onChange={(value) => {
        // eslint-disable-next-line no-console
        console.log(value);
        setRange(value);
      }}
    />
  );
}

storiesOf('DateRangePicker', module)
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
      <DateRangePicker
        dropdownType="modal"
        label="2 months"
        placeholder="Dates range in modal"
        amountOfMonths={2}
        mt="xl"
      />
    </div>
  ))
  .add('3 months', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker
        label="3 months"
        placeholder="Dates range"
        amountOfMonths={3}
        mt="xl"
        onDropdownClose={() => console.log('Close')}
        onDropdownOpen={() => console.log('open')}
      />
      <DateRangePicker
        dropdownType="modal"
        label="3 months"
        placeholder="Dates range in modal"
        amountOfMonths={3}
        mt="xl"
      />
    </div>
  ))
  .add('Date format on theme', () => (
    <MantineProvider theme={{ dateFormat: 'MM YYYY DD' }}>
      <DateRangePicker label="First" />
    </MantineProvider>
  ))
  .add('Initial level: month', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker initialLevel="month" />
    </div>
  ))
  .add('Initial level: year', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker initialLevel="year" />
    </div>
  ))
  .add('Controlled', () => <Controlled />)
  .add('Clear button tab index disabled', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker clearButtonTabIndex={-1} />
    </div>
  ));
