import dayjs from 'dayjs';

import 'dayjs/locale/ru';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react';
import { Button, Group, TextInput } from '@mantine/core';
import { DatePickerInput } from '../DatePickerInput';
import { DatesProvider } from '../DatesProvider';
import { DateInput } from './DateInput';

dayjs.extend(customParseFormat);

export default { title: 'DateInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" defaultDate={new Date(2022, 3, 11)} />
    </div>
  );
}

export function WithDefaultDate() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput
        placeholder="Enter date"
        value={value}
        onChange={setValue}
        defaultDate={new Date(1994, 1, 2)}
      />
    </div>
  );
}

export function CloseButton() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" defaultValue={new Date(2022, 3, 11)} clearable />
      <DatePickerInput placeholder="Enter date" defaultValue={new Date(2022, 3, 11)} clearable />
    </div>
  );
}

export function ControlledValue() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" value={value} onChange={setValue} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" defaultDate={new Date(2022, 3, 11)} unstyled />
    </div>
  );
}

export function LocaleChanges() {
  const [locale, setLocale] = useState('en');
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput label="Date picker input" placeholder="Pick date" locale={locale} />
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
        <DateInput label="Date picker input" placeholder="Pick date" />
        <Group mt="md">
          <Button onClick={() => setLocale('en')}>En locale</Button>
          <Button onClick={() => setLocale('ru')}>Ru locale</Button>
        </Group>
      </div>
    </DatesProvider>
  );
}

export function ValueValues() {
  const [value, setValue] = useState<Date | null>(new Date());
  const incrementDate = () => setValue((current) => dayjs(current!).subtract(-1, 'month').toDate());

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput
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

export function WithTime() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput
        placeholder="Enter date"
        valueFormat="DD/MM/YYYY HH:mm:ss"
        value={value}
        onChange={setValue}
      />
      {value && (
        <div>
          D: {value.getDate()}
          <br />
          H: {value.getHours()}
          <br />
          M: {value.getMinutes()}
          <br />
          S: {value.getSeconds()}
          <br />
        </div>
      )}
    </div>
  );
}

export function WithTimeMeridian() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput
        placeholder="Enter date"
        valueFormat="DD/MM/YYYY hh:mm A"
        value={value}
        onChange={setValue}
      />
      {value && (
        <div>
          D: {value.getDate()}
          <br />
          H: {value.getHours()}
          <br />
          M: {value.getMinutes()}
          <br />
          S: {value.getSeconds()}
          <br />
        </div>
      )}
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Allow deselect" allowDeselect />
      <DateInput placeholder="Clearable" clearable mt="md" />
    </div>
  );
}

export function FocusShift() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" />
      <TextInput placeholder="Should have focus once Tab is pressed" mt="md" />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" readOnly />
      <DateInput
        placeholder="Enter date"
        readOnly
        defaultValue={new Date(2022, 3, 11)}
        clearable
        mt="md"
      />
    </div>
  );
}

export function ValueFormat() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" valueFormat="DD/MM/YYYY" />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" clearable />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<Date | null>(new Date(2022, 3, 11));
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" value={value} onChange={setValue} clearable />
      <Button onClick={() => setValue(new Date(2022, 7, 11))}>Set value</Button>
      <Button onClick={() => setValue(null)}>Set null</Button>
    </div>
  );
}

export function ControlledFixedValue() {
  const [value, setValue] = useState<Date | null>(new Date(2022, 3, 11));
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" value={value} clearable />
      <Button onClick={() => setValue(new Date(2022, 7, 11))}>Set value</Button>
      <Button onClick={() => setValue(null)}>Set null</Button>
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
      <DateInput label="Date input" placeholder="Pick year" name="year-input" />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export function Size() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput size="xl" placeholder="Date input" popoverProps={{ opened: true }} id="test-id" />
    </div>
  );
}
