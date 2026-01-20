import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'day').toDate())}>
          Previous Day
        </Button>
        <Text fw={500}>{dayjs(date).format('MMMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'day').toDate())}>
          Next Day
        </Button>
      </Group>

      <DayView
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`;

function Demo() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'day').toDate())}>
          Previous Day
        </Button>
        <Text fw={500}>{dayjs(date).format('MMMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'day').toDate())}>Next Day</Button>
      </Group>

      <DayView
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={regularEvents}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}

export const controlledDate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
