import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { _eventDetailsCode, EventDetails } from '../_EventDetails';
import { resources } from './_data';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const eventData: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    resourceId: 'tokyo',
    payload: {
      description: 'Daily team sync meeting',
      attendees: ['Alice', 'Bob', 'Charlie'],
      location: 'Floor 3',
    },
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
    resourceId: 'paris',
    payload: {
      description: 'Plan next sprint tasks and goals',
      attendees: ['Diana', 'Eve'],
      location: 'Main Hall',
    },
  },
  {
    id: 3,
    title: 'Design Review',
    start: `${tomorrow} 13:00:00`,
    end: `${tomorrow} 14:00:00`,
    color: 'orange',
    resourceId: 'tokyo',
    payload: {
      description: 'Review UI/UX designs for new feature',
      attendees: ['Henry', 'Alice'],
      location: 'Studio B',
    },
  },
  {
    id: 4,
    title: 'Client Call',
    start: `${tomorrow} 09:30:00`,
    end: `${tomorrow} 10:30:00`,
    color: 'violet',
    resourceId: 'new-york',
    payload: {
      description: 'Quarterly review with client',
      attendees: ['Frank', 'Grace'],
      location: 'Zoom',
    },
  },
  {
    id: 5,
    title: 'Workshop',
    start: `${nextWeek} 14:00:00`,
    end: `${nextWeek} 16:00:00`,
    color: 'pink',
    resourceId: 'paris',
    payload: {
      description: 'Hands-on coding workshop',
      attendees: ['Bob', 'Charlie', 'Diana'],
      location: 'Lab 2',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <ResourcesMonthView
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
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} resources={resources} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
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
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} resources={resources} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`;

export const renderEvent: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'EventDetails.tsx', code: _eventDetailsCode, language: 'tsx' },
    {
      fileName: 'data.ts',
      code: `import { ScheduleResourceData } from '@mantine/schedule';\n\nexport const resources: ScheduleResourceData[] = ${JSON.stringify(resources, null, 2)};\n\n// Events with payload data for EventDetails\nexport const events = [\n  // ... events with payload: { description, attendees, location }\n];`,
      language: 'tsx',
    },
  ],
};
