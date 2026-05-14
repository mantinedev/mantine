import { ScheduleHeader } from './ScheduleHeader';

export default { title: 'schedule/ScheduleHeader' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleHeader>
        <ScheduleHeader.Previous />
        <ScheduleHeader.Today />
        <ScheduleHeader.Next />
        <ScheduleHeader.MonthYearSelect yearValue={2025} monthValue={11} />
      </ScheduleHeader>
    </div>
  );
}
