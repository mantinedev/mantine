import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable & Resizable',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'gray',
    resourceId: 'paris',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Movable',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'green',
    resourceId: 'new-york',
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable & Resizable',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    resourceId: 'paris',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Movable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
    resourceId: 'new-york',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
      )
    );
  };

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string; event: ScheduleEventData }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      withEventResize
      onEventDrop={handleEventDrop}
      onEventResize={handleEventResize}
      canDragEvent={(event) => !event.payload?.locked}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`;

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
      )
    );
  };

  const handleEventResize = ({
    eventId,
    newStart,
    newEnd,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      withEventResize
      onEventDrop={handleEventDrop}
      onEventResize={handleEventResize}
      canDragEvent={(event) => !event.payload?.locked}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}

export const permissions: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
