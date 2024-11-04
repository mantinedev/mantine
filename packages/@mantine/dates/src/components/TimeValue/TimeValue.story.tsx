import { TimeValue } from './TimeValue';

export default { title: 'TimeValue' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TimeValue value="12:30" withSeconds />
    </div>
  );
}
