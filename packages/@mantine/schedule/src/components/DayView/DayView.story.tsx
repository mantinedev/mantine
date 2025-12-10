import { DayView } from './DayView';

export default { title: 'schedule/DayView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} />
    </div>
  );
}

export function CustomTimeRange() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} startTime="10:00:00" endTime="16:00:00" />
    </div>
  );
}

export function CustomInterval() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} intervalMinutes={12} slotHeight={120} allDaySlotHeight={220} />
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
