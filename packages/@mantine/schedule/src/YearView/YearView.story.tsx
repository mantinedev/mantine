import { YearView } from './YearView';

export default { title: 'schedule/YearView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <YearView year="2025-11-01" />
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
