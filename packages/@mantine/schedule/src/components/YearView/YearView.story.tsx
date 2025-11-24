import 'dayjs/locale/ru';

import { YearView } from './YearView';

export default { title: 'schedule/YearView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" />
    </div>
  );
}

export function MonthLabelFormat() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" monthLabelFormat="MMM YYYY" />
    </div>
  );
}

export function FirstDayOfWeek() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" firstDayOfWeek={0} />
    </div>
  );
}

export function WeekendDays() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" weekendDays={[1, 2]} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" radius="md" />
    </div>
  );
}

export function WithWeekNumbers() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" withWeekNumbers />
    </div>
  );
}

export function WithWeekdays() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" withWeekDays={false} />
    </div>
  );
}

export function Locale() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" locale="ru" />
    </div>
  );
}
