import dayjs from 'dayjs';
import { useState } from 'react';
import { DecadeLevel } from './DecadeLevel';

export default { title: 'DecadeLevel' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DecadeLevel decade="2022-04-11" />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel decade="2022-02-01" minDate="2022-05-01" />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel decade="2022-02-01" maxDate="2022-10-01" />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState<string>(dayjs().format('YYYY-MM-DD'));

  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel
        decade={dayjs().format('YYYY-MM-DD')}
        getYearControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <DecadeLevel decade={dayjs().format('YYYY-MM-DD')} size={size} key={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
