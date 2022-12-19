import dayjs from 'dayjs';
import React, { useState } from 'react';
import { YearLevel } from './YearLevel';

export default { title: 'YearLevel' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <YearLevel year={new Date(2022, 3, 11)} />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel year={new Date(2022, 1, 1)} minDate={new Date(2022, 4, 1)} />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel year={new Date(2022, 1, 1)} maxDate={new Date(2022, 9, 1)} />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel
        year={new Date()}
        getMonthControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}

export function WithControls() {
  const [year, setYear] = useState(new Date());

  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel
        year={year}
        onNext={() => setYear(dayjs(year).add(1, 'year').toDate())}
        onPrevious={() => setYear(dayjs(year).subtract(1, 'year').toDate())}
      />
    </div>
  );
}
