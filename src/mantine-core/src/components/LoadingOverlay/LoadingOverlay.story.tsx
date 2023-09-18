import React from 'react';
import { LoadingOverlay } from './LoadingOverlay';

export default { title: 'LoadingOverlay' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <LoadingOverlay visible />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <LoadingOverlay visible unstyled />
    </div>
  );
}
