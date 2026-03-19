import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourceMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
];

const manyEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Code Review',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Design Review',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'violet',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Sprint Planning',
    start: `${today} 15:00:00`,
    end: `${today} 16:00:00`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 5,
    title: 'Retrospective',
    start: `${today} 16:30:00`,
    end: `${today} 17:30:00`,
    color: 'cyan',
    resourceId: 'tokyo',
  },
  {
    id: 6,
    title: 'Client Call',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'pink',
    resourceId: 'paris',
  },
  {
    id: 7,
    title: 'Workshop',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'grape',
    resourceId: 'paris',
  },
  {
    id: 8,
    title: 'Standup',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'red',
    resourceId: 'paris',
  },
  {
    id: 9,
    title: 'Demo',
    start: `${today} 16:00:00`,
    end: `${today} 17:00:00`,
    color: 'teal',
    resourceId: 'paris',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourceMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Meeting', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Code Review', start: \`\${today} 11:00:00\`, end: \`\${today} 12:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Sprint Planning', start: \`\${today} 15:00:00\`, end: \`\${today} 16:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 16:30:00\`, end: \`\${today} 17:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'pink', resourceId: 'paris' },
  { id: 7, title: 'Workshop', start: \`\${today} 11:00:00\`, end: \`\${today} 12:00:00\`, color: 'grape', resourceId: 'paris' },
  { id: 8, title: 'Standup', start: \`\${today} 14:00:00\`, end: \`\${today} 15:00:00\`, color: 'red', resourceId: 'paris' },
  { id: 9, title: 'Demo', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'teal', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerCell={3}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={manyEvents}
      maxEventsPerCell={3}
    />
  );
}

export const maxEventsPerCell: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
