import dayjs from 'dayjs';
import { useState } from 'react';
import { DatesRangeValue, DateStringValue } from '../../types';
import { QuarterPicker } from './QuarterPicker';

export default { title: 'QuarterPicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker type="multiple" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker type="range" />
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker allowDeselect />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<DateStringValue | null>('2026-04-01');
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker value={value} onChange={setValue} />
      <div>{value}</div>
    </div>
  );
}

export function ControlledRange() {
  const [value, setValue] = useState<DatesRangeValue<DateStringValue>>([null, null]);
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker type="range" value={value} onChange={setValue} />
      <div>{value.join(' – ')}</div>
    </div>
  );
}

export function MinMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker minDate="2026-03-01" maxDate="2027-08-01" defaultDate="2026-01-01" />
    </div>
  );
}

export function NumberOfColumns() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker numberOfColumns={2} />
    </div>
  );
}

export function MaxLevelYear() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker maxLevel="year" />
    </div>
  );
}

export function Presets() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker
        presets={[
          { value: dayjs().startOf('quarter').format('YYYY-MM-DD'), label: 'This quarter' },
          {
            value: dayjs().add(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'),
            label: 'Next quarter',
          },
          {
            value: dayjs().subtract(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'),
            label: 'Last quarter',
          },
        ]}
      />
    </div>
  );
}

export function NativeLevelSelect() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterPicker withNativeLevelSelect />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40, width: 600 }}>
      <QuarterPicker fullWidth />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <QuarterPicker size="xs" />
      <QuarterPicker size="sm" />
      <QuarterPicker size="md" />
      <QuarterPicker size="lg" />
      <QuarterPicker size="xl" />
    </div>
  );
}
