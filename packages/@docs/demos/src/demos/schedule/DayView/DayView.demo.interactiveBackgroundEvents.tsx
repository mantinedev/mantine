import dayjs from 'dayjs';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const eventsData: ScheduleEventData[] = [
  {
    id: 'out-of-office',
    title: 'Out of office',
    start: `${today} 12:00:00`,
    end: `${today} 16:00:00`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'standup',
    title: 'Standup',
    start: `${today} 09:30:00`,
    end: `${today} 10:00:00`,
    color: 'teal',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'violet',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: `${today} 14:30:00`,
    end: `${today} 15:30:00`,
    color: 'blue',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'out-of-office',
    title: 'Out of office',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'standup',
    title: 'Standup',
    start: \`\${today} 09:30:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'teal',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'violet',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: \`\${today} 14:30:00\`,
    end: \`\${today} 15:30:00\`,
    color: 'blue',
  },
];

function Demo() {
  const [date, setDate] = useState(today);
  const [clicked, setClicked] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <Text size="sm" mb="md">
        Last clicked:{' '}
        {clicked
          ? \`\${clicked.title} (\${clicked.display === 'background' ? 'background' : 'regular'} event)\`
          : 'nothing yet'}
      </Text>

      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        withInteractiveBackgroundEvents
        onEventClick={setClicked}
        startTime="08:00:00"
        endTime="18:00:00"
        intervalMinutes={30}
      />
    </>
  );
}
`;

function Demo() {
  const [date, setDate] = useState(today);
  const [clicked, setClicked] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <Text size="sm" mb="md">
        Last clicked:{' '}
        {clicked
          ? `${clicked.title} (${clicked.display === 'background' ? 'background' : 'regular'} event)`
          : 'nothing yet'}
      </Text>

      <DayView
        date={date}
        onDateChange={setDate}
        events={eventsData}
        withInteractiveBackgroundEvents
        onEventClick={setClicked}
        startTime="08:00:00"
        endTime="18:00:00"
        intervalMinutes={30}
      />
    </>
  );
}

export const interactiveBackgroundEvents: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
