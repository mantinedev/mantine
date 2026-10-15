import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
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
        selectMonth: 'Seleccionar mes',
        selectYear: 'Seleccionar año',
        switchToDayView: 'Cambiar a vista de día',
        switchToWeekView: 'Cambiar a vista de semana',
        switchToMonthView: 'Cambiar a vista de mes',
        switchToYearView: 'Cambiar a vista de año',
        viewSelectLabel: 'Vista del calendario',
        allDay: 'Todo el día',
        noEvents: 'No hay eventos',
        weekNumber: (weekNumber) => \`Semana \${weekNumber}\`,
      }}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
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
        noEvents: 'No hay eventos',
        weekNumber: (weekNumber) => `Semana ${weekNumber}`,
      }}
    />
  );
}

export const localization: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  centered: true,
  maxWidth: 375,
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
