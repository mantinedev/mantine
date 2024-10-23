import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { DatesProvider } from '../DatesProvider';
import { DatePickerInput } from './DatePickerInput';

export default { title: 'DatePickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput placeholder="Date picker input" highlightToday />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        numberOfColumns={3}
        allowDeselect
        unstyled
      />
    </div>
  );
}

export function MaxDateBeforeToday() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        maxDate={new Date(2020, 0, 11)}
      />
    </div>
  );
}

export function MinDateBeforeToday() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        minDate={new Date(2028, 0, 11)}
      />
    </div>
  );
}

export function DisabledCurrentDate() {
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        minDate={nextMonth}
        defaultValue={new Date()}
      />
    </div>
  );
}

export function LocaleChanges() {
  const [locale, setLocale] = useState('en');
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" locale={locale} />
      <Group mt="md">
        <Button onClick={() => setLocale('en')}>En locale</Button>
        <Button onClick={() => setLocale('ru')}>Ru locale</Button>
      </Group>
    </div>
  );
}

export function LocaleChangesDatesProvider() {
  const [locale, setLocale] = useState('en');
  return (
    <DatesProvider settings={{ locale }}>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <DatePickerInput label="Date picker input" placeholder="Pick date" />
        <Group mt="md">
          <Button onClick={() => setLocale('en')}>En locale</Button>
          <Button onClick={() => setLocale('ru')}>Ru locale</Button>
        </Group>
      </div>
    </DatesProvider>
  );
}

export function ControlledValues() {
  const [value, setValue] = useState<Date | null>(new Date());
  const incrementDate = () => setValue((current) => dayjs(current!).subtract(-1, 'month').toDate());

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <Group mt="md">
        <Button onClick={incrementDate}>Increment</Button>
        <Button onClick={() => setValue(new Date())}>Today</Button>
      </Group>
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Default read only" placeholder="Pick date" readOnly />
      <DatePickerInput
        mt="md"
        label="Read only with value"
        placeholder="Pick date"
        defaultValue={new Date(2022, 3, 11)}
        clearable
        readOnly
      />
      <DatePickerInput
        mt="md"
        label="Read only with modal"
        placeholder="Pick date"
        dropdownType="modal"
        readOnly
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" disabled />
    </div>
  );
}

export function DropdownModal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" dropdownType="modal" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput type="range" label="Date picker input" />
      <DatePickerInput type="range" label="Custom labelSeparator" labelSeparator="~" />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput type="multiple" label="Date picker input" />
    </div>
  );
}

export function SelectedDisabledDate() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput
        label="Date picker input"
        defaultValue={new Date()}
        getDayProps={(date) => ({ disabled: dayjs(date).isSame(new Date(), 'day') })}
      />
    </div>
  );
}

export function WithMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput label="Date picker input" maxDate={new Date()} />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput label="Default" clearable />
      <DatePickerInput label="Multiple" type="multiple" clearable />
      <DatePickerInput label="Range" type="range" clearable />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <DatePickerInput
      size={size}
      key={size}
      placeholder={size}
      label={size}
      mt="xl"
      dropdownType="modal"
    />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function DefaultDate() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput defaultDate={new Date('1990/01/01')} />
      <DatePickerInput defaultDate={new Date()} />
    </div>
  );
}
