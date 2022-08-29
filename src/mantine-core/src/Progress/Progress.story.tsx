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
