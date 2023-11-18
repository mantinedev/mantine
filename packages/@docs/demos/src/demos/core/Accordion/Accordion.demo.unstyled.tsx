import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
