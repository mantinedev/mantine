import { useState } from 'react';
import { DatesRangeValue } from '../../types';
import { YearPicker } from './YearPicker';

export default { title: 'YearPicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <YearPicker />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <YearPicker type="multiple" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <YearPicker type="range" />
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40 }}>
      <YearPicker allowDeselect />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <YearPicker value={value} onChange={setValue} numberOfColumns={3} columnsToScroll={1} />
      {value?.toISOString()}
    </div>
  );
}

export function ControlledRange() {
  const [value, setValue] = useState<DatesRangeValue>([null, null]);
  return (
    <div style={{ padding: 40 }}>
      <YearPicker
        type="range"
        value={value}
        onChange={setValue}
        numberOfColumns={3}
        columnsToScroll={1}
      />
      {value.map((date) => (date ? date.toISOString() : 'ns')).join(' – ')}
    </div>
  );
}

export function ControlledMultiple() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <YearPicker
        type="multiple"
        value={value}
        onChange={setValue}
        numberOfColumns={3}
        columnsToScroll={1}
      />
      {value.map((date) => (date ? date.toISOString() : 'ns')).join(', ')}
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <YearPicker size={size} key={size} />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
