import { QuartersList } from './QuartersList';

export default { title: 'QuartersList' };

export function Usage() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <QuartersList year="2026-01-01" />
    </div>
  );
}

export function MinMaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <QuartersList year="2026-01-01" minDate="2026-04-01" maxDate="2026-08-01" />
    </div>
  );
}

export function CustomFormat() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <QuartersList year="2026-01-01" quartersListFormat="[Quarter] Q" />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <QuartersList year="2026-01-01" size="xs" />
      <QuartersList year="2026-01-01" size="sm" />
      <QuartersList year="2026-01-01" size="md" />
      <QuartersList year="2026-01-01" size="lg" />
      <QuartersList year="2026-01-01" size="xl" />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40, width: 600 }}>
      <QuartersList year="2026-01-01" fullWidth />
    </div>
  );
}
