import dayjs from 'dayjs';
import React, { useState } from 'react';
import { MonthsList } from './MonthsList';

export default { title: 'MonthsList' };

export function Usage() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year={new Date()} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year={new Date()} unstyled />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year={new Date(2022, 1, 1)} minDate={new Date(2022, 4, 1)} />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year={new Date(20222, 1, 1)} maxDate={new Date(20222, 9, 1)} />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList
        year={new Date()}
        getMonthControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}
