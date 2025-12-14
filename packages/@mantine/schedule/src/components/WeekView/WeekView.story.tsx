import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData } from '../../types';
import { getStartOfWeek, toDateString } from '../../utils';
import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

const weekStart = dayjs(getStartOfWeek(new Date(), 1)).format('YYYY-MM-DD');

const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team lunch',
    start: `${weekStart} 12:00:00`,
    end: `${weekStart} 14:00:00`,
    color: 'red',
    payload: {},
  },
];

console.log(regularEvents);

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

export function RegularEvents() {
  return <WeekView date={new Date()} events={regularEvents} />;
}
