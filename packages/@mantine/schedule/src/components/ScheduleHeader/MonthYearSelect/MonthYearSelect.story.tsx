import { MonthYearSelect } from './MonthYearSelect';

export default { title: 'schedule/MonthYearSelect' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MonthYearSelect
        yearValue={2025}
        monthValue={10}
        popoverProps={{ opened: true }}
        radius="md"
      />
    </div>
  );
}
