import { TimeInput } from './TimeInput';

export default { title: 'TimeInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TimeInput />
    </div>
  );
}

export function WithSeconds() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TimeInput withSeconds />
    </div>
  );
}

export function WithMinMaxTimes() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TimeInput minTime="10:00" maxTime="18:00" />
    </div>
  );
}
