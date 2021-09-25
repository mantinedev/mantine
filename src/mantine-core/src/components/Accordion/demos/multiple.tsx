import React from 'react';
import { BaseDemo } from './_base';

const code = `
<Accordion multiple>
  {/* ...items */}
</Accordion>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
      <BaseDemo multiple />
    </div>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
