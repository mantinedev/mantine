import { MiniCalendar } from './MiniCalendar';

export default { title: 'MiniCalendar' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MiniCalendar />
    </div>
  );
}

export function DisabledDay() {
  return (
    <div style={{ padding: 40 }}>
      <MiniCalendar date="2025-01-01" minDate="2025-01-03" />
    </div>
  );
}
