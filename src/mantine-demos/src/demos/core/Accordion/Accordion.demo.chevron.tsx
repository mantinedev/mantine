import React from 'react';
import { IconPlus } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

function Demo() {
  return (
    <Accordion
      chevron={<IconPlus size={16} />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    >
      {/* <Accordion.Item /> components */}
    </Accordion>
  );
}
`;

export function IconReplaceDemo() {
  return (
    <BaseDemo
      chevron={<IconPlus size={16} />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    />
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>
      <IconReplaceDemo />
    </div>
  );
}

export const chevron: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
