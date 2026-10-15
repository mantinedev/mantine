import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
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
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} más\`,
      }}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
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
        moreLabel: (hiddenEventsCount) => `+${hiddenEventsCount} más`,
      }}
    />
  );
}

export const labels: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
