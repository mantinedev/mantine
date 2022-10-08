import React from 'react';
import { RingProgress } from './RingProgress';

export default { title: 'RingProgress' };

export function ColorsIndex() {
  return (
    <div style={{ padding: 40 }}>
      <RingProgress
        sections={[
          {
            value: 10,
            color: 'blue.4',
          },
          {
            value: 10,
            color: 'red.1',
          },
          {
            value: 10,
            color: 'orange.9',
          },
        ]}
      />
    </div>
  );
}

export function WithTooltips() {
  return (
    <div style={{ padding: 40 }}>
      <RingProgress
        sections={[
          { value: 40, color: 'cyan', tooltip: 'Hello' },
          { value: 20, color: 'blue', tooltip: 'There' },
          { value: 15, color: 'indigo', tooltip: 'You' },
        ]}
      />
    </div>
  );
}
