import { useState } from 'react';
import { Schedule, ScheduleViewLevel } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { Button, Group, Text } from '@mantine/core';
import { events } from './_data';

const code = `
import { useState } from 'react';
import { Schedule, ScheduleViewLevel } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Group mb="md">
        <Text size="sm">
          Current view: <strong>{view}</strong>
        </Text>
        <Button.Group>
          <Button size="xs" variant={view === 'day' ? 'filled' : 'default'} onClick={() => setView('day')}>
            Day
          </Button>
          <Button size="xs" variant={view === 'week' ? 'filled' : 'default'} onClick={() => setView('week')}>
            Week
          </Button>
          <Button size="xs" variant={view === 'month' ? 'filled' : 'default'} onClick={() => setView('month')}>
            Month
          </Button>
          <Button size="xs" variant={view === 'year' ? 'filled' : 'default'} onClick={() => setView('year')}>
            Year
          </Button>
        </Button.Group>
      </Group>

      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={events}
      />
    </div>
  );
}
`;

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Group mb="md">
        <Text size="sm">
          Current view: <strong>{view}</strong>
        </Text>
        <Button.Group>
          <Button size="xs" variant={view === 'day' ? 'filled' : 'default'} onClick={() => setView('day')}>
            Day
          </Button>
          <Button size="xs" variant={view === 'week' ? 'filled' : 'default'} onClick={() => setView('week')}>
            Week
          </Button>
          <Button size="xs" variant={view === 'month' ? 'filled' : 'default'} onClick={() => setView('month')}>
            Month
          </Button>
          <Button size="xs" variant={view === 'year' ? 'filled' : 'default'} onClick={() => setView('year')}>
            Year
          </Button>
        </Button.Group>
      </Group>

      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={events}
      />
    </div>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
