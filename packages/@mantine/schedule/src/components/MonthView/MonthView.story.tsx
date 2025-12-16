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
  // Multiple events on the same day (Nov 15)
  {
    id: 6,
    title: 'Morning Standup',
    start: '2025-11-15 09:00:00',
    end: '2025-11-15 09:30:00',
    color: 'blue',
    payload: {},
  },
  {
    id: 7,
    title: 'Development Workshop',
    start: '2025-11-15 10:00:00',
    end: '2025-11-15 11:30:00',
    color: 'grape',
    payload: {},
  },
  {
    id: 8,
    title: 'Code Review',
    start: '2025-11-15 12:00:00',
    end: '2025-11-15 13:00:00',
    color: 'orange',
    payload: {},
  },
  {
    id: 9,
    title: 'Lunch with PM',
    start: '2025-11-15 13:00:00',
    end: '2025-11-15 14:00:00',
    color: 'lime',
    payload: {},
  },
  {
    id: 10,
    title: 'Client Presentation',
    start: '2025-11-15 14:30:00',
    end: '2025-11-15 15:30:00',
    color: 'red',
    payload: {},
  },
  {
    id: 11,
    title: 'Retrospective',
    start: '2025-11-15 16:00:00',
    end: '2025-11-15 17:00:00',
    color: 'yellow',
    payload: {},
  },
  // 2-week long event
  {
    id: 12,
    title: 'Hackathon - 2 Weeks',
    start: '2025-11-17 09:00:00',
    end: '2025-11-30 17:00:00',
    color: 'indigo',
    payload: {},
  },
  {
    id: 13,
    title: 'Launch Event',
    start: '2025-11-20 16:00:00',
    end: '2025-11-20 18:00:00',
    color: 'teal',
    payload: {},
  },
  {
    id: 14,
    title: 'Training Session',
    start: '2025-11-22 13:00:00',
    end: '2025-11-22 14:30:00',
    color: 'cyan',
    payload: {},
  },
  {
    id: 15,
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
