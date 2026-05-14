import dayjs from 'dayjs';
import { useState } from 'react';
import { DatesRangeValue, DateStringValue } from '../../types';
import { MonthPicker } from './MonthPicker';

export default { title: 'MonthPicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker type="multiple" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker type="range" />
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker allowDeselect />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker value={value} onChange={setValue} numberOfColumns={3} columnsToScroll={1} />
      {value}
    </div>
  );
}

export function ControlledRange() {
  const [value, setValue] = useState<DatesRangeValue>([null, null]);
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker
        type="range"
        value={value}
        onChange={setValue}
        numberOfColumns={3}
        columnsToScroll={1}
      />
      {value.map((date) => date || 'ns').join(' – ')}
    </div>
  );
}

export function ControlledMultiple() {
  const [value, setValue] = useState<DateStringValue[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker
        type="multiple"
        value={value}
        onChange={setValue}
        numberOfColumns={3}
        columnsToScroll={1}
      />
      {value.map((date) => date || 'ns').join(', ')}
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <MonthPicker size={size} key={size} />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function Presets() {
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <MonthPicker
        value={value}
        onChange={setValue}
        presets={[
          { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
          {
            value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'),
            label: 'Next month',
          },
          {
            value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            label: 'Last month',
          },
          {
            value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'),
            label: 'In 6 months',
          },
          {
            value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'),
            label: 'Next year',
          },
          {
            value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'),
            label: 'Last year',
          },
        ]}
      />
    </div>
  );
}
