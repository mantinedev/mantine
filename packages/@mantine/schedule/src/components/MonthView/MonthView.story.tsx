import 'dayjs/locale/ru';

import { useState } from 'react';
import { MonthView } from './MonthView';

export default { title: 'schedule/MonthView' };

export function Usage() {
  const [date, setDate] = useState('2025-11-01 00:00:00');

  return (
    <div style={{ padding: 40 }}>
      <MonthView date={date} onDateChange={setDate} />
    </div>
  );
}

export function NoOutsideDays() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date="2025-11-01" withOutsideDays={false} />
    </div>
  );
}

export function WeekendDays() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date="2025-11-01" weekendDays={[1, 2]} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date="2025-11-01" radius="md" withWeekNumbers withWeekDays={false} />
    </div>
  );
}

export function FirstDayOfWeek() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date="2025-11-01" firstDayOfWeek={0} />
    </div>
  );
}

export function WithWeekNumbers() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date="2025-11-01" withWeekNumbers />
    </div>
  );
}

export function Locale() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView date="2025-11-01" locale="ru" />
    </div>
  );
}
