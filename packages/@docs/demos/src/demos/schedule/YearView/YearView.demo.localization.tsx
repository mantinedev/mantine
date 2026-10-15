import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
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
        weekNumber: (weekNumber) => \`Semana \${weekNumber}\`,
      }}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
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
        weekNumber: (weekNumber) => `Semana ${weekNumber}`,
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
