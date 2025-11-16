import 'dayjs/locale/ru';

import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

export function Usage() {
  return <WeekView week={new Date()} />;
}

export function Locale() {
  return <WeekView week={new Date()} locale="ru" />;
}

export function HighlightToday() {
  return <WeekView week={new Date()} highlightToday="weekday" />;
}

export function EmphasizeToday() {
  return <WeekView week={new Date()} emphasizeToday />;
}

export function Radius() {
  return <WeekView week="2025-11-03" radius="md" />;
}

export function NoWeekends() {
  return <WeekView week="2025-11-03" withWeekendDays={false} />;
}

export function FirstDayOfWeek() {
  return <WeekView week="2025-11-03" firstDayOfWeek={0} />;
}

export function SlotLabelFormat() {
  return <WeekView week="2025-11-03" slotLabelFormat="h:mm a" />;
}

export function ScrollAreaProps() {
  return <WeekView week="2025-11-03" scrollAreaProps={{ mah: 600 }} />;
}

export function WithWeekNumber() {
  return <WeekView week="2025-11-03" withWeekNumber={false} />;
}
