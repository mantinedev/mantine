import React from 'react';
import { Badge } from '../Badge';

const code = `
<div style={{ width: 200 }}>
  <Badge variant="filled" fullWidth>
    Full width badge
  </Badge>
</div>

<div style={{ width: 120 }}>
  <Badge variant="filled" fullWidth>
    Badge with overflow
  </Badge>
</div>
`;

function Demo() {
  return (
    <>
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </div>

      <div style={{ width: 120, marginTop: 15 }}>
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </div>
    </>
  );
}

export const overflow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
