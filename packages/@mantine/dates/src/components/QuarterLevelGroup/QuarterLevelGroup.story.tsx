import { QuarterLevelGroup } from './QuarterLevelGroup';

export default { title: 'QuarterLevelGroup' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterLevelGroup year="2026-01-01" />
    </div>
  );
}

export function TwoColumns() {
  return (
    <div style={{ padding: 40 }}>
      <QuarterLevelGroup year="2026-01-01" numberOfColumns={2} />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40, width: 800 }}>
      <QuarterLevelGroup year="2026-01-01" numberOfColumns={2} fullWidth />
    </div>
  );
}
