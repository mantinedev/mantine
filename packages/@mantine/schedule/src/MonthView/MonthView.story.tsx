import 'dayjs/locale/ru';

import { MonthView } from './MonthView';

export default { title: 'schedule/MonthView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" />
    </div>
  );
}

export function WeekendDays() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" weekendDays={[1, 2]} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" radius="md" withWeekNumbers withWeekDays={false} />
    </div>
  );
}

export function FirstDayOfWeek() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" firstDayOfWeek={0} />
    </div>
  );
}

export function WithWeekNumbers() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" withWeekNumbers />
    </div>
  );
}

export function Locale() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" locale="ru" />
    </div>
  );
}
