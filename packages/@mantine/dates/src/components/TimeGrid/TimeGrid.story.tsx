import { getTimeRange } from '../TimePicker';
import { TimeGrid } from './TimeGrid';

export default { title: 'TimeGrid' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TimeGrid data={getTimeRange({ startTime: '10:00', endTime: '18:00', interval: '01:00' })} />
    </div>
  );
}
