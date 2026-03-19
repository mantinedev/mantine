import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourceMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, resourceEvents, resources } from './_data';

const code = `
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourceMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'Más',
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} más\`,
      }}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={resourceEvents}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'Más',
        moreLabel: (hiddenEventsCount) => `+${hiddenEventsCount} más`,
      }}
    />
  );
}

export const localization: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
