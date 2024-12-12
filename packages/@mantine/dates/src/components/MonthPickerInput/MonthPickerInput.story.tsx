import dayjs from 'dayjs';
import { Group } from '@mantine/core';
import { DateInput } from '../DateInput';
import { MonthPickerInput } from './MonthPickerInput';

export default { title: 'MonthPickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MonthPickerInput
        label="Month picker input"
        placeholder="Pick month"
        defaultDate={new Date(1994, 2)}
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
      <MonthPickerInput type="range" label="Custom labelSeparator" labelSeparator="~" />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <MonthPickerInput
        type="multiple"
        label="Month picker input"
        defaultValue={[
          new Date(2022, 1, 0),
          new Date(2022, 2, 0),
          new Date(2022, 3, 0),
          new Date(2022, 4, 0),
          new Date(2022, 5, 0),
          new Date(2022, 6, 0),
          new Date(2022, 7, 0),
        ]}
      />
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

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <MonthPickerInput size={size} key={size} placeholder={size} label={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function FocusReturn() {
  return (
    <Group>
      <DateInput />
      <MonthPickerInput />
    </Group>
  );
}
