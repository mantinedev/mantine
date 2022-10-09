import { MantineDemo } from '@mantine/ds';
import { Cascader } from '@mantine/core';
import React, { useState } from 'react';
import { CASCADER_DEFAULT_DATA } from './util';

const code = `
import { Cascader } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[] | null>(null);

  return <Cascader value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<string[] | null>(null);

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <Cascader data={CASCADER_DEFAULT_DATA} value={value} onChange={setValue} clearable />
    </div>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
