import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const manyEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: `${today} 08:00:00`,
    end: `${today} 08:30:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Design Review',
    start: `${today} 10:30:00`,
    end: `${today} 11:30:00`,
    color: 'violet',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Code Review',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 5,
    title: 'Retrospective',
    start: `${today} 14:30:00`,
    end: `${today} 15:30:00`,
    color: 'cyan',
    resourceId: 'tokyo',
  },
  {
    id: 6,
    title: 'Client Call',
    start: `${today} 16:00:00`,
    end: `${today} 17:00:00`,
    color: 'pink',
    resourceId: 'tokyo',
  },
  {
    id: 7,
    title: 'Workshop',
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: 'grape',
    resourceId: 'paris',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: \`\${today} 08:00:00\`, end: \`\${today} 08:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 10:30:00\`, end: \`\${today} 11:30:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 14:30:00\`, end: \`\${today} 15:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={manyEvents}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}

export const moreEvents: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
