import { MonthView } from './MonthView';

export default { title: 'schedule/MonthView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" />
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
