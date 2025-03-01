import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Stack } from '@mantine/core';
import { DatesRangeValue, DateStringValue } from '../../types';
import { DatePicker } from './DatePicker';

export default { title: 'DatePicker' };

export function Usage() {
  const [value, setValue] = useState('2025-02-12');

  return (
    <div style={{ padding: 40 }}>
      <DatePicker
        type="default"
        minDate={new Date('2020-01-01')}
        maxDate={new Date()}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export function RangedSetPartial() {
  const [value, setValue] = useState<[DateStringValue | null, DateStringValue | null]>([
    dayjs(new Date()).format('YYYY-MM-DD'),
    null,
  ]);

  return (
    <div style={{ padding: 40 }}>
      <DatePicker type="range" value={value} onChange={setValue} />
      <Button onClick={() => setValue([dayjs(new Date()).format('YYYY-MM-DD'), null])}>
        Set initial range
      </Button>
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
  const [value, setValue] = useState<[DateStringValue | null, DateStringValue | null]>([
    null,
    null,
  ]);

  const handleChange = (val: [DateStringValue | null, DateStringValue | null]) => {
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
      <DatePicker type="range" defaultValue={['2022-04-11', null]} />
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
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <DatePicker value={value} onChange={setValue} numberOfColumns={3} columnsToScroll={1} />
      {value}
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
      {value.map((date) => date || 'ns').join(' – ')}
    </div>
  );
}

export function ControlledMultiple() {
  const [value, setValue] = useState<DateStringValue[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <DatePicker
        type="multiple"
        value={value}
        onChange={setValue}
        numberOfColumns={3}
        columnsToScroll={1}
      />
      {value.map((date) => date || 'ns').join(', ')}
    </div>
  );
}
