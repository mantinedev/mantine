import React from 'react';
import { BaseDemo } from './_base';

const code = `
<Accordion iconPosition="right">
  {/* ...items */}
</Accordion>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <BaseDemo iconPosition="right" />
    </div>
  );
}

export const iconPosition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
