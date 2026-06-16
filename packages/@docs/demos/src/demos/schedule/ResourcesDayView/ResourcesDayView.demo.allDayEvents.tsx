import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Offsite',
    start: `${today} 00:00:00`,
    end: `${tomorrow} 00:00:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 6,
    title: 'On call',
    start: `${today} 00:00:00`,
    end: `${tomorrow} 00:00:00`,
    color: 'grape',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Maintenance',
    start: `${today} 00:00:00`,
    end: `${tomorrow} 00:00:00`,
    color: 'gray',
    display: 'background',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Client Call',
    start: `${today} 09:30:00`,
    end: `${today} 10:30:00`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: 'Holiday',
    start: `${today} 00:00:00`,
    end: `${tomorrow} 00:00:00`,
    color: 'orange',
    resourceId: 'new-york',
  },
];

const dataCode = `
import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

// All-day events span the whole day (start at 00:00, end at the next day 00:00).
// Foreground all-day events render as a full-width bar pinned to the top of the
// resource row, background all-day events (display: 'background') tint the whole row.
const events: ScheduleEventData[] = [
  { id: 1, title: 'Offsite', start: \`\${today} 00:00:00\`, end: \`\${tomorrow} 00:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 6, title: 'On call', start: \`\${today} 00:00:00\`, end: \`\${tomorrow} 00:00:00\`, color: 'grape', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Maintenance', start: \`\${today} 00:00:00\`, end: \`\${tomorrow} 00:00:00\`, color: 'gray', display: 'background', resourceId: 'paris' },
  { id: 4, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 5, title: 'Holiday', start: \`\${today} 00:00:00\`, end: \`\${tomorrow} 00:00:00\`, color: 'orange', resourceId: 'new-york' },
];
`;

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export const allDayEvents: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
