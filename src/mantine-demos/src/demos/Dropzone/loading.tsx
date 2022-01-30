import React from 'react';
import { BaseDemo } from './_base';

const code = `
<Dropzone loading>
  {/* children */}
</Dropzone>
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
