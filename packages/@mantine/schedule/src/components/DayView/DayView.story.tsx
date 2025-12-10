import { DayView } from './DayView';

export default { title: 'schedule/DayView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} />
    </div>
  );
}

export function CustomInterval() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} intervalMinutes={12} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} radius="md" />
    </div>
  );
}
