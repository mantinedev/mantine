import dayjs from 'dayjs';
import { useState } from 'react';
import { DatesRangeValue, DateStringValue } from '../../types';
import { DatesProvider } from '../DatesProvider';
import { WeekPicker } from './WeekPicker';

export default { title: 'WeekPicker' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker type="multiple" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker type="range" />
    </div>
  );
}

export function AllowDeselect() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker allowDeselect />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<DateStringValue | null>(dayjs().format('YYYY-MM-DD'));
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker value={value} onChange={setValue} />
      <div>{value}</div>
    </div>
  );
}

export function ControlledRange() {
  const [value, setValue] = useState<DatesRangeValue<DateStringValue>>([null, null]);
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker type="range" value={value} onChange={setValue} />
      <div>{value.join(' – ')}</div>
    </div>
  );
}

export function SundayFirst() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker firstDayOfWeek={0} />
    </div>
  );
}

export function DatesProviderFirstDay() {
  return (
    <DatesProvider settings={{ firstDayOfWeek: 6 }}>
      <div style={{ padding: 40 }}>
        <WeekPicker />
      </div>
    </DatesProvider>
  );
}

export function WeekControlProps() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker
        getWeekControlProps={(weekStart) => ({
          'aria-label': `Select week starting on ${weekStart}`,
          disabled: dayjs(weekStart).date() < 8,
        })}
      />
    </div>
  );
}

export function NumberOfColumns() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker numberOfColumns={2} type="range" />
    </div>
  );
}

export function MinMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker
        minDate={dayjs().subtract(2, 'week').format('YYYY-MM-DD')}
        maxDate={dayjs().add(2, 'week').format('YYYY-MM-DD')}
      />
    </div>
  );
}

export function Presets() {
  return (
    <div style={{ padding: 40 }}>
      <WeekPicker
        presets={[
          { value: dayjs().format('YYYY-MM-DD'), label: 'This week' },
          { value: dayjs().add(1, 'week').format('YYYY-MM-DD'), label: 'Next week' },
          { value: dayjs().subtract(1, 'week').format('YYYY-MM-DD'), label: 'Last week' },
        ]}
      />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40, width: 600 }}>
      <WeekPicker fullWidth />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <WeekPicker size="xs" />
      <WeekPicker size="sm" />
      <WeekPicker size="md" />
      <WeekPicker size="lg" />
      <WeekPicker size="xl" />
    </div>
  );
}
