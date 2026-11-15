import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, events, groups, resources } from './_day-cells-data';

const code = `
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, groups, resources } from './data';

function Demo() {
  const [date, setDate] = useState('2026-10-28');
  const [data, setData] = useState(events);

  return (
    <ResourcesWeekView
      layout="days"
      date={date}
      onDateChange={setDate}
      resources={resources}
      groups={groups}
      events={data}
      dayWidth={80}
      rowHeight={80}
      withEventsDragAndDrop
      withEventResize
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) =>
        setData((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
          )
        )
      }
      onEventResize={({ eventId, newStart, newEnd }) =>
        setData((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
          )
        )
      }
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState('2026-10-28');
  const [data, setData] = useState(events);

  return (
    <ResourcesWeekView
      layout="days"
      date={date}
      onDateChange={setDate}
      resources={resources}
      groups={groups}
      events={data}
      dayWidth={80}
      rowHeight={80}
      withEventsDragAndDrop
      withEventResize
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) =>
        setData((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
          )
        )
      }
      onEventResize={({ eventId, newStart, newEnd }) =>
        setData((current) =>
          current.map((event) =>
            event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
          )
        )
      }
    />
  );
}

export const dayCells: MantineDemo = {
  type: 'code',
  component: Demo,
  defaultExpanded: false,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
