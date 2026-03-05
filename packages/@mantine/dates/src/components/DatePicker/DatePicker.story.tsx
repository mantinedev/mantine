import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Stack } from '@mantine/core';
import { DatesRangeValue, DateStringValue } from '../../types';
import { DatePicker } from './DatePicker';

export default { title: 'DatePicker' };

export function Usage() {
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <DatePicker
        size="sm"
        value={value}
        onChange={setValue}
        date={value || undefined}
        headerControlsOrder={['level', 'previous', 'next']}
        styles={{
          calendarHeaderLevel: {
            justifyContent: 'flex-start',
            paddingInlineStart: 7,
          },
        }}
        presets={[
          { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
          { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
          { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
          { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
          { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
          { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
          { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
        ]}
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

export function ConditionalMinDate() {
  const [value, setValue] = useState<DatesRangeValue>([null, null]);

  const minDate =
    value[0] && !value[1]
      ? dayjs(value[0]).subtract(1, 'month').format('YYYY-MM-DD')
      : undefined;

  return (
    <div style={{ padding: 40 }}>
      <p>
        Select a start date, then select an end date. The month should NOT jump when minDate changes
        dynamically.
      </p>
      <p>minDate: {minDate ?? 'none'}</p>
      <p>
        value: {value[0] ?? 'null'} – {value[1] ?? 'null'}
      </p>
      <DatePicker
        type="range"
        value={value}
        onChange={setValue}
        minDate={minDate as DateStringValue | undefined}
      />
    </div>
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
