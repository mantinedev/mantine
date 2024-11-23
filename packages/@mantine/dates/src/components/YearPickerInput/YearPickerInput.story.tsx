import dayjs from 'dayjs';
import { Button } from '@mantine/core';
import { YearPickerInput } from './YearPickerInput';

export default { title: 'YearPickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPickerInput
        label="Year picker input"
        placeholder="Pick year"
        defaultDate={new Date(1994, 2)}
      />
    </div>
  );
}

export function UncontrolledFormValues() {
  return (
    <form
      style={{ padding: 40, maxWidth: 400 }}
      onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.log(Object.fromEntries(new FormData(event.currentTarget) as any));
      }}
    >
      <YearPickerInput label="Year picker input" placeholder="Pick year" name="year-input" />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPickerInput label="Year picker input" placeholder="Pick year" disabled />
    </div>
  );
}

export function DropdownModal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPickerInput label="Year picker input" placeholder="Pick year" dropdownType="modal" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <YearPickerInput type="range" label="Year picker input" />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <YearPickerInput type="multiple" label="Year picker input" />
    </div>
  );
}

export function SelectedDisabledYear() {
  return (
    <div style={{ padding: 40 }}>
      <YearPickerInput
        label="Year picker input"
        defaultValue={new Date()}
        getYearControlProps={(date) => ({ disabled: dayjs(date).isSame(new Date(), 'year') })}
      />
    </div>
  );
}

export function WithMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <YearPickerInput label="Year picker input" maxDate={new Date()} />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <YearPickerInput label="Default" clearable />
      <YearPickerInput label="Multiple" type="multiple" clearable />
      <YearPickerInput label="Range" type="range" clearable />
      <YearPickerInput
        label="Readonly"
        value={[new Date(), new Date()]}
        type="range"
        clearable
        readOnly
      />
      <YearPickerInput
        label="Disabled"
        value={[new Date(), new Date()]}
        type="range"
        clearable
        disabled
      />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <YearPickerInput size={size} key={size} placeholder={size} label={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
