import dayjs from 'dayjs';
import React from 'react';
import { MonthPickerInput } from './MonthPickerInput';

export default { title: 'MonthPickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MonthPickerInput
        label="Month picker input"
        placeholder="Pick month"
        numberOfColumns={3}
        allowDeselect
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MonthPickerInput label="Month picker input" placeholder="Pick month" disabled />
    </div>
  );
}

export function DropdownModal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MonthPickerInput label="Month picker input" placeholder="Pick month" dropdownType="modal" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPickerInput type="range" label="Month picker input" />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPickerInput type="multiple" label="Month picker input" />
    </div>
  );
}

export function SelectedDisabledMonth() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPickerInput
        label="Month picker input"
        defaultValue={new Date()}
        getMonthControlProps={(date) => ({ disabled: dayjs(date).isSame(new Date(), 'month') })}
      />
    </div>
  );
}

export function WithMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPickerInput label="Month picker input" maxDate={new Date()} />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <MonthPickerInput label="Default" clearable />
      <MonthPickerInput label="Multiple" type="multiple" clearable />
      <MonthPickerInput label="Range" type="range" clearable />
    </div>
  );
}
