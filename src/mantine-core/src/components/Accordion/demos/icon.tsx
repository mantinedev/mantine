import React from 'react';
import { PlusCircledIcon } from '@modulz/radix-icons';
import { BaseDemo } from './_base';

const code = `
<Accordion icon={<PlusCircledIcon />}>
  {/* <Accordion.Item /> components */}
</Accordion>
`;

export function IconReplaceDemo() {
  return <BaseDemo icon={<PlusCircledIcon />} />;
}

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <IconReplaceDemo />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
