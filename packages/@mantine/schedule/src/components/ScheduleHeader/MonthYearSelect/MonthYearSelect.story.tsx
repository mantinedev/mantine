import 'dayjs/locale/ru';

import { MonthYearSelect } from './MonthYearSelect';

export default { title: 'schedule/MonthYearSelect' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MonthYearSelect yearValue={2025} monthValue={10} popoverProps={{ opened: true }} />
    </div>
  );
}

export function Radius() {
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

export function Locale() {
  return (
    <div style={{ padding: 40 }}>
      <MonthYearSelect
        yearValue={2025}
        monthValue={10}
        popoverProps={{ opened: true }}
        locale="ru"
      />
    </div>
  );
}
