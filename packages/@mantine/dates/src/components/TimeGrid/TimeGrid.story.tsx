import { useState } from 'react';
import { getTimeRange } from '../TimePicker';
import { TimeGrid } from './TimeGrid';

export default { title: 'TimeGrid' };

export function Usage() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <TimeGrid
        value={value}
        onChange={setValue}
        data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
        size="md"
        radius="md"
        allowDeselect
      />
    </div>
  );
}
