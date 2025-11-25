import dayjs from 'dayjs';
import { useState } from 'react';
import { YearsList } from './YearsList';
import { DateStringValue } from '../../types';

export default { title: 'YearsList' };

export function Usage() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade="2022-01-01" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade="2022-01-01" unstyled />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade="2022-04-11" minDate="2024-05-11" />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade="2022-02-01" maxDate="2022-10-01" />
    </div>
  );
}

export function WithGetYearsControlPropsChildren() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList year="2022-01-01" getYearControlProps={(date: DateStringValue) => {
        return {
          children: <strong>{date}</strong>
        }
      }} />
    </div>
  );
}


export function WithRange() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade="2022-02-01" getYearControlProps={() => ({ inRange: true })} />
      <YearsList
        decade="2022-02-01"
        getYearControlProps={() => ({ firstInRange: true, selected: true })}
      />
      <YearsList
        decade="2022-02-01"
        getYearControlProps={() => ({ lastInRange: true, selected: true })}
      />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState('2022-01-01');

  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList
        decade="2022-01-01"
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
    <YearsList
      decade="2022-01-01"
      size={size}
      key={size}
      getYearControlProps={() => ({ selected: true })}
      mt="xl"
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
