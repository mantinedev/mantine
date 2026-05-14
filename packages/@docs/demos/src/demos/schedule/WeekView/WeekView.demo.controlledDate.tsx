import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Week
        </Button>
        <Text fw={500}>{dayjs(date).startOf('week').format('MMM D')} – {dayjs(date).endOf('week').format('MMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Week
        </Button>
      </Group>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button
          onClick={() => setDate(dayjs(date).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}
        >
          Previous Week
        </Button>
        <Text fw={500}>
          {dayjs(date).startOf('week').format('MMM D')} –{' '}
          {dayjs(date).endOf('week').format('MMM D, YYYY')}
        </Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Week
        </Button>
      </Group>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={regularEvents}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}

export const controlledDate: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
