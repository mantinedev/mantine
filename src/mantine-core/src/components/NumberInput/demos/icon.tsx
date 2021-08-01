import React from 'react';
import { MortarBoardIcon } from '@primer/octicons-react';
import { NumberInput } from '../NumberInput';

const code = `
<NumberInput icon={<MortarBoardIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        label="Age when you graduated"
        placeholder="Age when you graduated"
        defaultValue={22}
        min={0}
        max={120}
        icon={<MortarBoardIcon />}
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
