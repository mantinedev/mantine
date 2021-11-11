import React from 'react';
import { storiesOf } from '@storybook/react';
import { Group } from '@mantine/core';
import { DateRangePicker } from './DateRangePicker';

storiesOf('@mantine/dates/DateRangePicker', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <DateRangePicker
        label="Pick dates"
        placeholder="Dates range"
        defaultValue={[new Date(), new Date()]}
      />
      <DateRangePicker
        label="First day of the week - sunday"
        placeholder="Dates range"
        defaultValue={[new Date(), new Date()]}
        firstDayOfWeek="sunday"
        style={{ paddingTop: '10px' }}
      />
    </div>
  ))
  .add('Within Group', () => (
    <div style={{ padding: 40 }}>
      <Group grow>
        <DateRangePicker label="First" />
        <DateRangePicker label="Second" />
      </Group>
    </div>
  ))
  .add('Multiple Months', () => (
    <>
      <div style={{ padding: 40 }}>
        <DateRangePicker
          label="One month"
          placeholder="Dates range"
          defaultValue={[new Date(), new Date()]}
          amountOfMonths={1}
        />

        <DateRangePicker
          label="Two months"
          placeholder="Dates range"
          defaultValue={[new Date(), new Date()]}
          amountOfMonths={2}
          mt="xl"
        />

        <DateRangePicker
          label="Three months"
          placeholder="Dates range"
          defaultValue={[new Date(), new Date()]}
          amountOfMonths={3}
          mt="xl"
        />
      </div>
    </>
  ));
