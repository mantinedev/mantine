import { MonthView } from './MonthView';

export default { title: 'schedule/MonthView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MonthView month="2025-11-01" />
    </div>
  );
}
