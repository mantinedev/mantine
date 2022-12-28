import React from 'react';
import { Paper, SimpleGrid, Input } from '@mantine/core';
import { DatePickerInput, TimeInput, DatePicker, DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';

function CalendarWrapper() {
  return (
    <Input.Wrapper labelElement="div" label="Calendar">
      <Paper
        withBorder
        p="md"
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        })}
      >
        <DatePicker />
      </Paper>
    </Input.Wrapper>
  );
}

function RangeCalendarWrapper() {
  return (
    <Input.Wrapper labelElement="div" label="Range calendar">
      <Paper
        withBorder
        p="md"
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        })}
      >
        <DatePicker
          type="range"
          defaultValue={[
            dayjs(new Date()).startOf('month').add(3, 'days').toDate(),
            dayjs(new Date()).startOf('month').add(8, 'days').toDate(),
          ]}
        />
      </Paper>
    </Input.Wrapper>
  );
}

export function Dates() {
  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      sx={(theme) => ({ rowGap: theme.spacing.md })}
      spacing="xl"
    >
      <DatePickerInput label="Date picker input" placeholder="Pick one date" />
      <DatePickerInput type="range" label="Date range picker" placeholder="Pick dates range" />
      <TimeInput label="Time input" />
      <DateTimePicker label="Date time picker" placeholder="Date time picker" />
      <CalendarWrapper />
      <RangeCalendarWrapper />
    </SimpleGrid>
  );
}
