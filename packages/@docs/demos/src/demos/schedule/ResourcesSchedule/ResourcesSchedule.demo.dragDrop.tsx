import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, resourceEvents, resources } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`;

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(resourceEvents);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
          )
        );
      }}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        startScrollDateTime: `${today} 08:00:00`,
      }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}

export const dragDrop: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
