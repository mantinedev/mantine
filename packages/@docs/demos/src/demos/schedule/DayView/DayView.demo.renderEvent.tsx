import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { _eventDetailsCode, EventDetails } from '../_EventDetails';

const today = dayjs().format('YYYY-MM-DD');

const eventData: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: {
      description: 'Daily team sync meeting',
      attendees: ['Alice', 'Bob', 'Charlie'],
      location: 'Conference Room A',
    },
  },
  {
    id: 2,
    title: 'Design Review',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'grape',
    payload: {
      description: 'Review UI/UX designs for new feature',
      attendees: ['Diana', 'Eve'],
      location: 'Virtual Meeting',
    },
  },
  {
    id: 3,
    title: 'Client Presentation',
    start: `${today} 14:00:00`,
    end: `${today} 15:30:00`,
    color: 'green',
    payload: {
      description: 'Q4 progress presentation to client',
      attendees: ['Frank', 'Grace', 'Henry'],
      location: 'Zoom',
    },
  },
  {
    id: 4,
    title: 'Code Review',
    start: `${today} 16:00:00`,
    end: `${today} 17:00:00`,
    color: 'orange',
    payload: {
      description: 'Review pull requests from this week',
      attendees: ['Alice', 'Charlie'],
      location: 'Dev Lab',
    },
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <DayView
      date={new Date()}
      events={selectedEvents}
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
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <DayView
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
