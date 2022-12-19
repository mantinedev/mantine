import dayjs from 'dayjs';
import React, { useState } from 'react';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TextInput, Button } from '@mantine/core';
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

export function WithTime() {
  const [value, setValue] = useState(null);
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
  const [value, setValue] = useState(null);
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
  const [value, setValue] = useState(new Date(2022, 3, 11));
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DateInput placeholder="Enter date" value={value} onChange={setValue} clearable />
      <Button onClick={() => setValue(new Date(2022, 7, 11))}>Set value</Button>
      <Button onClick={() => setValue(null)}>Set null</Button>
    </div>
  );
}

export function ControlledFixedValue() {
  const [value, setValue] = useState(new Date(2022, 3, 11));
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
