import React from 'react';
import { Progress } from './Progress';

export default { title: 'Progress' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={56} />
    </div>
  );
}

export function Striped() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={56} size="xl" animated />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={56} size="xl" unstyled />
    </div>
  );
}

export function Compound() {
  return (
    <div style={{ padding: 40 }}>
      <Progress.Root size="xl">
        <Progress.Section value={56}>
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="orange">
          <Progress.Label>Apps</Progress.Label>
        </Progress.Section>
        <Progress.Section value={15} color="cyan">
          <Progress.Label>Others</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </div>
  );
}
