import 'dayjs/locale/ru';

import { useState } from 'react';
import { ScheduleEventData } from '../../types';
import { YearView } from './YearView';

export default { title: 'schedule/YearView' };

const november2025Events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    start: '2025-11-03 09:00:00',
    end: '2025-11-03 10:30:00',
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Conference - Day 1',
    start: '2025-11-05',
    end: '2025-11-07',
    color: 'red',
    payload: {},
  },
  {
    id: 3,
    title: 'Morning Standup',
    start: '2025-11-10 08:00:00',
    end: '2025-11-10 08:30:00',
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Team Sync',
    start: '2025-11-10 10:00:00',
    end: '2025-11-10 11:00:00',
    color: 'violet',
    payload: {},
  },
  {
    id: 5,
    title: 'Lunch Meeting',
    start: '2025-11-10 12:00:00',
    end: '2025-11-10 13:00:00',
    color: 'orange',
    payload: {},
  },
  {
    id: 6,
    title: 'Product Workshop',
    start: '2025-11-10 14:00:00',
    end: '2025-11-10 15:30:00',
    color: 'cyan',
    payload: {},
  },
  {
    id: 7,
    title: 'Client Review',
    start: '2025-11-10 16:00:00',
    end: '2025-11-10 17:00:00',
    color: 'pink',
    payload: {},
  },
  {
    id: 8,
    title: 'Sales Summit',
    start: '2025-11-15',
    end: '2025-11-17',
    color: 'yellow',
    payload: {},
  },
  {
    id: 9,
    title: 'Thanksgiving Holiday',
    start: '2025-11-25',
    end: '2025-11-28',
    color: 'blue',
    payload: {},
  },
  {
    id: 10,
    title: 'Month Closing',
    start: '2025-11-28 10:00:00',
    end: '2025-11-28 11:00:00',
    color: 'grape',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState('2025-11-01');
  return (
    <div style={{ padding: 0 }}>
      <YearView
        date={date}
        onDateChange={setDate}
        events={november2025Events}
        withHeader={false}
        withWeekNumbers={false}
      />
    </div>
  );
}

export function MonthLabelFormat() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" monthLabelFormat="MMM YYYY" />
    </div>
  );
}

export function FirstDayOfWeek() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" firstDayOfWeek={0} />
    </div>
  );
}

export function WeekendDays() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" weekendDays={[1, 2]} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" radius="md" />
    </div>
  );
}

export function WithWeekNumbers() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" withWeekNumbers />
    </div>
  );
}

export function WithWeekdays() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" withWeekDays={false} />
    </div>
  );
}

export function Locale() {
  return (
    <div style={{ padding: 40 }}>
      <YearView date="2025-11-01" locale="ru" />
    </div>
  );
}
