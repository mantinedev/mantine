import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, resourceEvents, resources } from './_data';

const code = `
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        selectMonth: 'Seleccionar mes',
        selectYear: 'Seleccionar año',
        switchToDayView: 'Cambiar a vista de día',
        switchToWeekView: 'Cambiar a vista de semana',
        switchToMonthView: 'Cambiar a vista de mes',
        switchToYearView: 'Cambiar a vista de año',
        viewSelectLabel: 'Vista del calendario',
        allDay: 'Todo el día',
        timeSlot: 'Franja horaria',
        resources: 'Recursos',
        resourceSlot: 'Franja del recurso',
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} más\`,
      }}
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
      resources={resources}
      events={resourceEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={`${dayjs().format('YYYY-MM-DD')} 08:00:00`}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        selectMonth: 'Seleccionar mes',
        selectYear: 'Seleccionar año',
        switchToDayView: 'Cambiar a vista de día',
        switchToWeekView: 'Cambiar a vista de semana',
        switchToMonthView: 'Cambiar a vista de mes',
        switchToYearView: 'Cambiar a vista de año',
        viewSelectLabel: 'Vista del calendario',
        allDay: 'Todo el día',
        timeSlot: 'Franja horaria',
        resources: 'Recursos',
        resourceSlot: 'Franja del recurso',
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
