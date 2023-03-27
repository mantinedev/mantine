/* eslint-disable no-console */
import React from 'react';
import { Progress } from './Progress';

export default { title: 'Progress' };

export function WithTooltips() {
  return (
    <div style={{ padding: 40 }}>
      <Progress
        size={20}
        sections={[
          { value: 40, color: 'cyan', tooltip: 'Hello' },
          { value: 20, color: 'blue', tooltip: 'There' },
          { value: 15, color: 'indigo', tooltip: 'You' },
        ]}
      />
    </div>
  );
}

export function WithSectionProps() {
  return (
    <div style={{ padding: 40 }}>
      <Progress
        size={20}
        sections={[
          { value: 40, color: 'cyan', onClick: () => console.log('1') },
          { value: 20, color: 'blue', onClick: () => console.log('2') },
          { value: 15, color: 'indigo', onClick: () => console.log('3') },
        ]}
      />
    </div>
  );
}
