import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const demoResources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const demoEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: `${today} 09:00:00`,
    end: `${today} 10:30:00`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Code Review',
    start: `${today} 09:30:00`,
    end: `${today} 10:00:00`,
    color: 'violet',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: '1:1 Meeting',
    start: `${today} 09:15:00`,
    end: `${today} 10:15:00`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 5,
    title: 'Client Call',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'cyan',
    resourceId: 'paris',
  },
  {
    id: 6,
    title: 'Design Review',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'pink',
    resourceId: 'paris',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'red',
    resourceId: 'paris',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  // ... many overlapping events per resource
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      maxEventsPerTimeSlot={2}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={demoResources}
      events={demoEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${today} 08:00:00`}
      maxEventsPerTimeSlot={2}
    />
  );
}

export const maxEventsPerTimeSlot: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
