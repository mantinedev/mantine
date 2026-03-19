import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { _eventDetailsCode, EventDetails } from '../_EventDetails';
import { resources } from './_data';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');

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
    resourceId: 'tokyo',
    payload: {
      description: 'Plan next sprint tasks and goals',
      attendees: ['Diana', 'Eve'],
      location: 'Main Hall',
    },
  },
  {
    id: 3,
    title: 'Client Call',
    start: `${tomorrow} 09:30:00`,
    end: `${tomorrow} 10:30:00`,
    color: 'violet',
    resourceId: 'paris',
    payload: {
      description: 'Quarterly review with client',
      attendees: ['Frank', 'Grace'],
      location: 'Zoom',
    },
  },
  {
    id: 4,
    title: 'Design Review',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'orange',
    resourceId: 'paris',
    payload: {
      description: 'Review UI/UX designs for new feature',
      attendees: ['Henry', 'Alice'],
      location: 'Studio B',
    },
  },
  {
    id: 5,
    title: 'Workshop',
    start: `${dayAfter} 14:00:00`,
    end: `${dayAfter} 16:00:00`,
    color: 'pink',
    resourceId: 'new-york',
    payload: {
      description: 'Hands-on coding workshop',
      attendees: ['Bob', 'Charlie', 'Diana'],
      location: 'Lab 2',
    },
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withEventsDragAndDrop
      onEventDrop={(eventId, newStart, newEnd, _event, resourceId) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="bottom" closeDelay={0} transitionProps={{ duration: 0 }}>
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
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${dayjs().format('YYYY-MM-DD')} 08:00:00`}
      withEventsDragAndDrop
      onEventDrop={(eventId, newStart, newEnd, _event, resourceId) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="bottom" closeDelay={0} transitionProps={{ duration: 0 }}>
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
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'EventDetails.tsx', code: _eventDetailsCode, language: 'tsx' },
    {
      fileName: 'data.ts',
      code: `import { ScheduleEventData } from '@mantine/schedule';\n\nexport const eventsData: ScheduleEventData[] = ${JSON.stringify(eventData, null, 2)};`,
      language: 'tsx',
    },
  ],
};
