import 'dayjs/locale/ru';

import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

export function Usage() {
  return <WeekView week={new Date()} />;
}

export function StartEndTime() {
  return <WeekView week={new Date()} startTime="08:00:00" endTime="12:00:00" />;
}

export function IntervalMinutes() {
  return (
    <WeekView week={new Date()} startTime="08:00:00" endTime="12:00:00" intervalMinutes={15} />
  );
}

export function Locale() {
  return <WeekView week={new Date()} locale="ru" />;
}

export function HighlightToday() {
  return <WeekView week={new Date()} highlightToday="weekday" />;
}

export function Radius() {
  return <WeekView week={new Date()} radius="md" />;
}

export function NoWeekends() {
  return <WeekView week={new Date()} withWeekendDays={false} />;
}

export function FirstDayOfWeek() {
  return <WeekView week={new Date()} firstDayOfWeek={0} />;
}

export function SlotLabelFormat() {
  return <WeekView week={new Date()} slotLabelFormat="h:mm a" />;
}

export function ScrollAreaProps() {
  return <WeekView week={new Date()} scrollAreaProps={{ mah: 600 }} />;
}

export function WithWeekNumber() {
  return <WeekView week={new Date()} withWeekNumber={false} />;
}

export function WithAllDaySlots() {
  return <WeekView week={new Date()} withAllDaySlots={false} />;
}
