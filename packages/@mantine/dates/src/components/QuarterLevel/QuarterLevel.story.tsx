import { QuarterLevel } from './QuarterLevel';

export default { title: 'QuarterLevel' };

export function Usage() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <QuarterLevel year="2026-01-01" />
    </div>
  );
}

export function WithNativeLevelSelect() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <QuarterLevel year="2026-01-01" withNativeLevelSelect />
    </div>
  );
}

export function MinMaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <QuarterLevel year="2026-01-01" minDate="2026-02-01" maxDate="2026-11-01" />
    </div>
  );
}
