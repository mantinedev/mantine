import 'dayjs/locale/ru';

import { useState } from 'react';
import { ScheduleEventData } from '../../types';
import { MonthView } from './MonthView';

export default { title: 'schedule/MonthView' };

const month = '2025-11-01';
const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: '2025-11-03 10:00:00',
    end: '2025-11-03 11:00:00',
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: '2025-11-05 09:00:00',
    end: '2025-11-05 17:00:00',
    color: 'red',
    payload: {},
  },
  {
    id: 3,
    title: 'Client Call',
    start: '2025-11-07 14:00:00',
    end: '2025-11-07 15:00:00',
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Conference',
    start: '2025-11-10 08:00:00',
    end: '2025-11-12 17:00:00',
    color: 'violet',
    payload: {},
  },
  {
    id: 5,
    title: 'Design Review',
    start: '2025-11-14 11:00:00',
    end: '2025-11-14 12:30:00',
    color: 'cyan',
    payload: {},
  },
  {
    id: 6,
    title: 'Launch Event',
    start: '2025-11-17 16:00:00',
    end: '2025-11-17 18:00:00',
    color: 'orange',
    payload: {},
  },
  {
    id: 7,
    title: 'Training Session',
    start: '2025-11-19 13:00:00',
    end: '2025-11-19 14:30:00',
    color: 'teal',
    payload: {},
  },
  {
    id: 8,
    title: 'Sprint Planning',
    start: '2025-11-21 10:00:00',
    end: '2025-11-21 11:30:00',
    color: 'indigo',
    payload: {},
  },
  {
    id: 9,
    title: 'Team Lunch',
    start: '2025-11-24 12:00:00',
    end: '2025-11-24 13:00:00',
    color: 'lime',
    payload: {},
  },
  {
    id: 10,
    title: 'Year-End Review',
    start: '2025-11-28 09:00:00',
    end: '2025-11-28 10:00:00',
    color: 'pink',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState(month);

  return (
    <div style={{ padding: 40 }}>
      <MonthView date={date} onDateChange={setDate} events={events} />
    </div>
  );
}

export function NoOutsideDays() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date={month} withOutsideDays={false} />
    </div>
  );
}

export function WeekendDays() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date={month} weekendDays={[1, 2]} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date={month} radius="md" withWeekNumbers withWeekDays={false} />
    </div>
  );
}

export function FirstDayOfWeek() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date={month} firstDayOfWeek={0} />
    </div>
  );
}

export function WithWeekNumbers() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date={month} withWeekNumbers />
    </div>
  );
}

export function Locale() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date={month} locale="ru" />
    </div>
  );
}
