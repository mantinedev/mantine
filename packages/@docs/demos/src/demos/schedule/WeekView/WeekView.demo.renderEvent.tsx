import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { _eventDetailsCode, EventDetails } from '../_EventDetails';

const today = dayjs();
const startOfWeek = today.startOf('week');

const eventData: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: startOfWeek.add(1, 'day').hour(9).minute(0).format('YYYY-MM-DD HH:mm:ss'),
    end: startOfWeek.add(1, 'day').hour(9).minute(30).format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
    payload: {
      description: 'Daily team sync meeting',
      attendees: ['Alice', 'Bob', 'Charlie'],
      location: 'Conference Room A',
    },
  },
  {
    id: 2,
    title: 'Design Workshop',
    start: startOfWeek.add(2, 'day').hour(10).minute(0).format('YYYY-MM-DD HH:mm:ss'),
    end: startOfWeek.add(2, 'day').hour(12).minute(0).format('YYYY-MM-DD HH:mm:ss'),
    color: 'grape',
    payload: {
      description: 'Collaborative design thinking session',
      attendees: ['Diana', 'Eve', 'Frank'],
      location: 'Creative Space',
    },
  },
  {
    id: 3,
    title: 'Client Presentation',
    start: startOfWeek.add(3, 'day').hour(14).minute(0).format('YYYY-MM-DD HH:mm:ss'),
    end: startOfWeek.add(3, 'day').hour(15).minute(30).format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
    payload: {
      description: 'Q4 progress presentation to client',
      attendees: ['Grace', 'Henry'],
      location: 'Zoom',
    },
  },
  {
    id: 4,
    title: 'Sprint Planning',
    start: startOfWeek.add(4, 'day').hour(10).minute(0).format('YYYY-MM-DD HH:mm:ss'),
    end: startOfWeek.add(4, 'day').hour(12).minute(0).format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
    payload: {
      description: 'Plan next sprint tasks and priorities',
      attendees: ['Alice', 'Charlie', 'Bob'],
      location: 'Dev Lab',
    },
  },
  {
    id: 5,
    title: 'All Day Conference',
    start: startOfWeek.add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: startOfWeek.add(5, 'day').format('YYYY-MM-DD 23:59:59'),
    color: 'pink',
    payload: {
      description: 'Annual tech conference',
      attendees: ['All Team'],
      location: 'Convention Center',
    },
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, Text, Stack, Badge, Group, UnstyledButton } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={(eventId, newStart, newEnd) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  start: dayjs(newStart).format('YYYY-MM-DD HH:mm:ss'),
                  end: dayjs(newEnd).format('YYYY-MM-DD HH:mm:ss'),
                }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    />
  );
}
`;

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={(eventId, newStart, newEnd) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  start: dayjs(newStart).format('YYYY-MM-DD HH:mm:ss'),
                  end: dayjs(newEnd).format('YYYY-MM-DD HH:mm:ss'),
                }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    />
  );
}

export const renderEvent: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'EventDetails.tsx', code: _eventDetailsCode, language: 'tsx' },
    {
      fileName: 'events.ts',
      code: `import { ScheduleEventData } from '@mantine/schedule';\n\nexport const eventsData: ScheduleEventData[] = ${JSON.stringify(eventData, null, 2)};`,
      language: 'tsx',
    },
  ],
};
