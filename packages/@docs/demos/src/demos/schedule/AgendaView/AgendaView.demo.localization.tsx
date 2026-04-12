import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const eventsData = [
  {
    id: 'standup',
    title: 'Reunión diaria',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 'workshop',
    title: 'Taller de diseño',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'grape',
  },
  {
    id: 'conference',
    title: 'Conferencia',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(4, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

const code = `
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Reunión diaria',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'workshop',
    title: 'Taller de diseño',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'grape',
  },
  {
    id: 'conference',
    title: 'Conferencia',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(4, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      locale="es"
      labels={{
        allDay: 'Todo el día',
        noEvents: 'Sin eventos',
      }}
    />
  );
}
`;

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={eventsData}
      locale="es"
      labels={{
        allDay: 'Todo el día',
        noEvents: 'Sin eventos',
      }}
    />
  );
}

export const localization: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 500,
  code,
};
