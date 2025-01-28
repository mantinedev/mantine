import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthsList } from './MonthsList';

export default { title: 'MonthsList' };

export function Usage() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year="2022-01-01" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year="2022-01-01" unstyled />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year="2022-01-01" minDate="2022-05-01" />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year="2022-01-01" maxDate="2022-10-01" />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState<string>(dayjs().format('YYYY-MM-DD'));

  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList
        year={dayjs().format('YYYY-MM-DD')}
        getMonthControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}

export function WithRange() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <MonthsList year="2022-01-01" getMonthControlProps={() => ({ inRange: true })} />
      <MonthsList
        year="2022-01-01"
        getMonthControlProps={() => ({ firstInRange: true, selected: true })}
      />
      <MonthsList
        year="2022-01-01"
        getMonthControlProps={() => ({ lastInRange: true, selected: true })}
      />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <MonthsList
      year={dayjs().format('YYYY-MM-DD')}
      size={size}
      key={size}
      getMonthControlProps={() => ({ selected: true })}
      mt="xl"
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
