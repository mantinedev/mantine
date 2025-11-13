import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <WeekView week="2025-11-03" />
    </div>
  );
}
