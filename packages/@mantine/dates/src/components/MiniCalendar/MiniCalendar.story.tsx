import { useState } from 'react';
import { MiniCalendar } from './MiniCalendar';

export default { title: 'MiniCalendar' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MiniCalendar size="xl" />
    </div>
  );
}

export function Controlled() {
  const [value, onChange] = useState('2025-01-01');
  return (
    <div style={{ padding: 40 }}>
      <MiniCalendar size="xl" value={value} onChange={onChange} />
    </div>
  );
}

export function DisabledDay() {
  return (
    <div style={{ padding: 40 }}>
      <MiniCalendar date="2025-01-01" minDate="2025-01-03" />
    </div>
  );
}
