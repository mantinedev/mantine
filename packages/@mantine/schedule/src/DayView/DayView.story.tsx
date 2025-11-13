import { DayView } from './DayView';

export default { title: 'schedule/DayView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DayView week="2025-11-03" />
    </div>
  );
}
