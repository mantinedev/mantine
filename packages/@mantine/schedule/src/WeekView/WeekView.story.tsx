import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

export function Usage() {
  return (
    <div>
      <WeekView week={new Date()} />
    </div>
  );
}

export function HighlightToday() {
  return (
    <div>
      <WeekView week={new Date()} highlightToday="weekday" />
    </div>
  );
}

export function EmphasizeToday() {
  return (
    <div>
      <WeekView week={new Date()} emphasizeToday />
    </div>
  );
}

export function Radius() {
  return (
    <div>
      <WeekView week="2025-11-03" radius="md" />
    </div>
  );
}

export function NoWeekends() {
  return (
    <div>
      <WeekView week="2025-11-03" withWeekendDays={false} />
    </div>
  );
}

export function FirstDayOfWeek() {
  return (
    <div>
      <WeekView week="2025-11-03" firstDayOfWeek={0} />
    </div>
  );
}
