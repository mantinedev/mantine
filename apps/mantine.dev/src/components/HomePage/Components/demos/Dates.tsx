import dayjs from 'dayjs';
import { Input, Paper, SimpleGrid } from '@mantine/core';
import { DatePicker, DatePickerInput, DateTimePicker, TimeInput } from '@mantine/dates';
import classes from './Demos.module.css';

function CalendarWrapper() {
  return (
    <Input.Wrapper labelElement="div" label="Calendar">
      <Paper withBorder p="md" className={classes.calendarWrapper}>
        <DatePicker />
      </Paper>
    </Input.Wrapper>
  );
}

function RangeCalendarWrapper() {
  return (
    <Input.Wrapper labelElement="div" label="Range calendar">
      <Paper withBorder p="md" className={classes.calendarWrapper}>
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
      cols={{ base: 1, sm: 2 }}
      style={{ rowGap: 'var(--mantine-spacing-md' }}
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
