import dayjs from 'dayjs';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const weekStart = dayjs().startOf('week');
const day = (offset: number) => weekStart.add(offset, 'day').format('YYYY-MM-DD');

const eventsData: ScheduleEventData[] = [
  {
    id: 'out-of-office',
    title: 'Out of office',
    start: `${day(1)} 00:00:00`,
    end: `${day(3)} 23:59:59`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: `${day(2)} 10:00:00`,
    end: `${day(2)} 11:00:00`,
    color: 'violet',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: `${day(2)} 14:00:00`,
    end: `${day(2)} 15:00:00`,
    color: 'blue',
  },
  {
    id: 'sprint-planning',
    title: 'Sprint planning',
    start: `${day(5)} 11:00:00`,
    end: `${day(5)} 12:00:00`,
    color: 'teal',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const weekStart = dayjs().startOf('week');
const day = (offset: number) => weekStart.add(offset, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'out-of-office',
    title: 'Out of office',
    start: \`\${day(1)} 00:00:00\`,
    end: \`\${day(3)} 23:59:59\`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${day(2)} 10:00:00\`,
    end: \`\${day(2)} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: \`\${day(2)} 14:00:00\`,
    end: \`\${day(2)} 15:00:00\`,
    color: 'blue',
  },
  {
    id: 'sprint-planning',
    title: 'Sprint planning',
    start: \`\${day(5)} 11:00:00\`,
    end: \`\${day(5)} 12:00:00\`,
    color: 'teal',
  },
];

function Demo() {
  const [clicked, setClicked] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <Text size="sm" mb="md">
        Last clicked:{' '}
        {clicked
          ? \`\${clicked.title} (\${clicked.display === 'background' ? 'background' : 'regular'} event)\`
          : 'nothing yet'}
      </Text>

      <MonthView
        date={new Date()}
        events={events}
        withInteractiveBackgroundEvents
        onEventClick={setClicked}
      />
    </>
  );
}
`;

function Demo() {
  const [clicked, setClicked] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <Text size="sm" mb="md">
        Last clicked:{' '}
        {clicked
          ? `${clicked.title} (${clicked.display === 'background' ? 'background' : 'regular'} event)`
          : 'nothing yet'}
      </Text>

      <MonthView
        date={new Date()}
        events={eventsData}
        withInteractiveBackgroundEvents
        onEventClick={setClicked}
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
