import React, { useState } from 'react';
import { Paper, SimpleGrid, InputWrapper } from '@mantine/core';
import {
  DatePicker,
  DateRangePicker,
  TimeInput,
  TimeRangeInput,
  Calendar,
  RangeCalendar,
} from '@mantine/dates';
import dayjs from 'dayjs';

function CalendarWrapper() {
  const [value, setValue] = useState(new Date());
  return (
    <InputWrapper labelElement="div" label="Calendar">
      <Paper
        withBorder
        p="md"
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        })}
      >
        <Calendar value={value} onChange={setValue} />
      </Paper>
    </InputWrapper>
  );
}
function RangeCalendarWrapper() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').add(3, 'days').toDate(),
    dayjs(new Date()).startOf('month').add(8, 'days').toDate(),
  ]);
  return (
    <InputWrapper labelElement="div" label="Range calendar">
      <Paper
        withBorder
        p="md"
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        })}
      >
        <RangeCalendar value={value} onChange={setValue} />
      </Paper>
    </InputWrapper>
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
      <DatePicker label="Date picker" placeholder="Pick one date" />
      <DateRangePicker label="Date range picker" placeholder="Pick dates range" />
      <TimeInput label="Time input" />
      <TimeRangeInput label="Time range input" />
      <CalendarWrapper />
      <RangeCalendarWrapper />
    </SimpleGrid>
  );
}
