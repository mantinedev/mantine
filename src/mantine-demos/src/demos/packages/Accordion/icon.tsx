import React from 'react';
import { CirclePlus } from 'tabler-icons-react';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@mantine/core';
import { CirclePlus } from 'tabler-icons-react';

function Demo() {
  return (
    <Accordion icon={<CirclePlus size={16} />} disableIconRotation>
      {/* <Accordion.Item /> components */}
    </Accordion>
  );
}
`;

export function IconReplaceDemo() {
  return <BaseDemo disableIconRotation icon={<CirclePlus size={16} />} />;
}

function Demo() {
  return (
    <div style={{ maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
      <IconReplaceDemo />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
