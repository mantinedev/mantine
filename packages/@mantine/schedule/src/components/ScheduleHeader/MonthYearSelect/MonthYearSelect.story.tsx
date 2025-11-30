import 'dayjs/locale/ru';

import { useState } from 'react';
import { MonthYearSelect } from './MonthYearSelect';

export default { title: 'schedule/MonthYearSelect' };

export function Usage() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(10);

  return (
    <div style={{ padding: 40 }}>
      <MonthYearSelect
        yearValue={year}
        monthValue={month}
        onYearChange={setYear}
        onMonthChange={setMonth}
      />
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

export function WithoutMonths() {
  return (
    <div style={{ padding: 40 }}>
      <MonthYearSelect yearValue={2025} withMonths={false} />
    </div>
  );
}
