import { useState } from 'react';
import { DateStringValue } from '../../types';
import { WeekPickerInput } from './WeekPickerInput';

export default { title: 'WeekPickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput label="Week picker" placeholder="Pick week" />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput
        label="Week picker"
        placeholder="Pick week"
        clearable
        defaultValue="2026-03-02"
      />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput type="multiple" label="Pick weeks" placeholder="Pick weeks" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput type="range" label="Weeks range" placeholder="Pick weeks range" />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput
        label="Controlled"
        placeholder="Pick week"
        value={value}
        onChange={setValue}
      />
      <div>{value}</div>
    </div>
  );
}

export function SundayFirst() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput firstDayOfWeek={0} label="Sunday first" placeholder="Pick week" />
    </div>
  );
}

export function CustomValueFormat() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput valueFormat="DD.MM.YYYY" label="Custom format" placeholder="Pick week" />
    </div>
  );
}

export function Modal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <WeekPickerInput dropdownType="modal" label="Modal" placeholder="Pick week" />
    </div>
  );
}
