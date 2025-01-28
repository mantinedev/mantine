import dayjs from 'dayjs';
import { useState } from 'react';
import { YearLevel } from './YearLevel';

export default { title: 'YearLevel' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <YearLevel year="2022-04-11" />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel year="2022-02-01" minDate="2022-05-01" />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel year="2022-02-01" maxDate="2022-10-01" />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState<string>(dayjs().format('YYYY-MM-DD'));

  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearLevel
        year={dayjs().format('YYYY-MM-DD')}
        getMonthControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <YearLevel year={dayjs().format('YYYY-MM-DD')} size={size} key={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
