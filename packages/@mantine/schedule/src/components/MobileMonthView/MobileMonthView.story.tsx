import { MobileMonthView } from './MobileMonthView';

export default { title: 'schedule/MobileMonthView' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MobileMonthView date="2025-11-01" />
    </div>
  );
}
