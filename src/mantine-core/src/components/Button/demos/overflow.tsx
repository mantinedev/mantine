import React from 'react';
import { Button } from '../Button';

const code = `
<div style={{ width: 200 }}>
  <Button variant="filled" fullWidth>
    Full width button
  </Button>
</div>

<div style={{ width: 120 }}>
  <Button variant="filled" fullWidth>
    Button with overflow
  </Button>
</div>
`;

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 200 }}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </div>

      <div style={{ width: 120, marginLeft: 15 }}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </div>
    </div>
  );
}

export const overflow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
