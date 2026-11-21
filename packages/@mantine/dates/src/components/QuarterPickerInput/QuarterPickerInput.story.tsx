import { useState } from 'react';
import { DateStringValue } from '../../types';
import { QuarterPickerInput } from './QuarterPickerInput';

export default { title: 'QuarterPickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput label="Quarter picker" placeholder="Pick quarter" />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput
        label="Quarter picker"
        placeholder="Pick quarter"
        clearable
        defaultValue="2026-04-01"
      />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput type="multiple" label="Pick quarters" placeholder="Pick quarters" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput type="range" label="Quarters range" placeholder="Pick quarters range" />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput
        label="Controlled"
        placeholder="Pick quarter"
        value={value}
        onChange={setValue}
      />
      <div>{value}</div>
    </div>
  );
}

export function Modal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput dropdownType="modal" label="Modal" placeholder="Pick quarter" />
    </div>
  );
}

export function Presets() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput
        label="With presets"
        placeholder="Pick quarter"
        presets={[
          { value: '2026-01-01', label: 'Q1 2026' },
          { value: '2026-04-01', label: 'Q2 2026' },
        ]}
      />
    </div>
  );
}

export function NativeLevelSelect() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <QuarterPickerInput withNativeLevelSelect label="Native select" placeholder="Pick quarter" />
    </div>
  );
}
