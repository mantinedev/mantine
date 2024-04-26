import { DatesProvider } from '../DatesProvider';
import { Calendar } from './Calendar';

export default { title: 'Calendar' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar unstyled />
    </div>
  );
}

export function ConsistentWeeks() {
  return (
    <div style={{ padding: 40 }}>
      <DatesProvider settings={{ consistentWeeks: true }}>
        <Calendar />
      </DatesProvider>
    </div>
  );
}

export function MaxLevel() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar maxLevel="year" />
    </div>
  );
}

export function MinLevel() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar minLevel="year" />
    </div>
  );
}

export function NumberOfColumns() {
  return (
    <div style={{ padding: 40 }}>
      <div>1 column</div>
      <Calendar mb={50} mt="xs" />

      <div>2 columns</div>
      <Calendar numberOfColumns={2} columnsToScroll={2} mb={50} mt="xs" />

      <div>3 columns</div>
      <Calendar numberOfColumns={3} mb={50} mt="xs" />
    </div>
  );
}

export function InitialLevelYear() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar defaultLevel="year" />
    </div>
  );
}

export function InitialLevelDecade() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar defaultLevel="decade" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Calendar size={size} key={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
