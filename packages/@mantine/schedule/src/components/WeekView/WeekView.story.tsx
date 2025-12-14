import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData } from '../../types';
import { toDateString } from '../../utils';
import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

const today = dayjs().format('YYYY-MM-DD');

const overlappingAllDayEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Conference Day',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
  {
    id: 2,
    title: 'Holiday',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
    payload: {},
  },
  {
    id: 3,
    title: 'Team Building',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
    payload: {},
  },
];

const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 12:30:00`,
    end: `${today} 13:30:00`,
    color: 'orange',
    payload: {},
  },
  {
    id: 4,
    title: 'Afternoon Review',
    start: `${today} 15:00:00`,
    end: `${today} 16:00:00`,
    color: 'cyan',
    payload: {},
  },
  {
    id: 5,
    title: 'Planning Session',
    start: dayjs(today).add(2, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs(today).add(2, 'day').format('YYYY-MM-DD 11:00:00'),
    color: 'violet',
    payload: {},
  },
];

const overlappingRegularEvents: ScheduleEventData[] = [
  {
    id: 0,
    title: 'Team Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Team Meeting 2',
    start: `${today} 10:00:00`,
    end: `${today} 16:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 1,
    title: 'Workshop Session 1',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: `${today} 11:00:00`,
    end: `${today} 12:30:00`,
    color: 'violet',
    payload: {},
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: `${today} 11:30:00`,
    end: `${today} 13:00:00`,
    color: 'cyan',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState(toDateString(new Date()));
  return <WeekView date={date} onDateChange={setDate} />;
}

export function StartEndTime() {
  return <WeekView date={new Date()} startTime="08:00:00" endTime="12:00:00" />;
}

export function IntervalMinutes() {
  return (
    <WeekView date={new Date()} startTime="08:00:00" endTime="12:00:00" intervalMinutes={15} />
  );
}

export function Locale() {
  return <WeekView date={new Date()} locale="ru" />;
}

export function HighlightToday() {
  return <WeekView date={new Date()} highlightToday="weekday" />;
}

export function Radius() {
  return <WeekView date={new Date()} radius="md" />;
}

export function NoWeekends() {
  return <WeekView date={new Date()} withWeekendDays={false} />;
}

export function FirstDayOfWeek() {
  return <WeekView date={new Date()} firstDayOfWeek={0} />;
}

export function SlotLabelFormat() {
  return <WeekView date={new Date()} slotLabelFormat="h:mm a" />;
}

export function ScrollAreaProps() {
  return <WeekView date={new Date()} scrollAreaProps={{ mah: 600 }} />;
}

export function WithWeekNumber() {
  return <WeekView date={new Date()} withWeekNumber={false} />;
}

export function WithAllDaySlots() {
  return <WeekView date={new Date()} withAllDaySlots={false} />;
}

export function OverlappingAllDayEvents() {
  return <WeekView date={new Date()} events={overlappingAllDayEvents} />;
}

export function RegularEvents() {
  return <WeekView date={new Date()} events={regularEvents} />;
}

export function OverlappingRegularEvents() {
  return <WeekView date={new Date()} events={overlappingRegularEvents} />;
}
