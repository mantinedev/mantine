import React from 'react';
import { Calendar } from './Calendar';

export default { title: 'Calendar' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar />
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
      <Calendar numberOfColumns={2} mb={50} mt="xs" />

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
