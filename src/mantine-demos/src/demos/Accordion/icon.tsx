import React from 'react';
import { PlusCircledIcon } from '@modulz/radix-icons';
import { BaseDemo } from './_base';

const code = `
<Accordion icon={<PlusCircledIcon />} disableIconRotation>
  {/* <Accordion.Item /> components */}
</Accordion>
`;

export function IconReplaceDemo() {
  return <BaseDemo disableIconRotation icon={<PlusCircledIcon />} />;
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
