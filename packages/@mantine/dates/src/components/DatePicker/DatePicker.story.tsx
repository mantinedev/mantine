import 'dayjs/locale/ru';

import { useState } from 'react';
import { Button, Stack } from '@mantine/core';
import { DatesRangeValue } from '../../types';
import { DatePicker } from './DatePicker';

export default { title: 'DatePicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker highlightToday />
    </div>
  );
}

export function RangedSetPartial() {
  const [value, setValue] = useState<[Date | null, Date | null]>([new Date(), null]);

  return (
    <div style={{ padding: 40 }}>
      <DatePicker type="range" value={value} onChange={setValue} />
      <Button onClick={() => setValue([new Date(), null])}>Set initial range</Button>
    </div>
  );
}

export function HideOutsideDates() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker hideOutsideDates />
    </div>
  );
}

export function RangeCancelled() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const handleChange = (val: [Date | null, Date | null]) => {
    setValue(val);
  };

  const clearRange = () => {
    setValue([null, null]);
  };

  return (
    <Stack>
      <DatePicker type="range" value={value} onChange={handleChange} allowSingleDateInRange />
      <Button onClick={clearRange}>CLEAR</Button>
    </Stack>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker unstyled />
    </div>
  );
}

export function RuLocale() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker locale="ru" />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker type="multiple" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker type="range" defaultValue={[new Date(2022, 3, 11), null]} />
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40 }}>
      <DatePicker allowDeselect />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <DatePicker value={value} onChange={setValue} numberOfColumns={3} columnsToScroll={1} />
      {value?.toISOString()}
    </div>
  );
}

export function ControlledRange() {
  const [value, setValue] = useState<DatesRangeValue>([null, null]);
  return (
    <div style={{ padding: 40 }}>
      <DatePicker
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
      <DatePicker
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
