import React from 'react';
import { Sparkline } from './Sparkline';

export default { title: 'Sparkline' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Sparkline
        w={200}
        h={60}
        data={[10, 20, 40, 20, 40, 10, 50]}
        color="blue.6"
        fillOpacity={0.2}
      />
    </div>
  );
}
