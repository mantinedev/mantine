import dayjs from 'dayjs';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const events: ScheduleEventData[] = [
  {
    id: 'maintenance',
    title: 'Maintenance',
    start: `${today} 12:00:00`,
    end: `${today} 16:00:00`,
    color: 'red',
    display: 'background',
    resourceId: 'paris',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: `${today} 14:30:00`,
    end: `${today} 15:30:00`,
    color: 'blue',
    resourceId: 'paris',
  },
  {
    id: 'standup',
    title: 'Standup',
    start: `${today} 09:30:00`,
    end: `${today} 10:00:00`,
    color: 'teal',
    resourceId: 'tokyo',
  },
];

const dataCode = `
import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const events: ScheduleEventData[] = [
  {
    id: 'maintenance',
    title: 'Maintenance',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'red',
    display: 'background',
    resourceId: 'paris',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: \`\${today} 14:30:00\`,
    end: \`\${today} 15:30:00\`,
    color: 'blue',
    resourceId: 'paris',
  },
  {
    id: 'standup',
    title: 'Standup',
    start: \`\${today} 09:30:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
];
`;

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
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

      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withInteractiveBackgroundEvents
        onEventClick={setClicked}
        startTime="08:00:00"
        endTime="18:00:00"
        startScrollDateTime={\`\${today} 08:00:00\`}
      />
    </>
  );
}
`;

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
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

      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withInteractiveBackgroundEvents
        onEventClick={setClicked}
        startTime="08:00:00"
        endTime="18:00:00"
        startScrollDateTime={`${today} 08:00:00`}
      />
    </>
  );
}

export const interactiveBackgroundEvents: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
