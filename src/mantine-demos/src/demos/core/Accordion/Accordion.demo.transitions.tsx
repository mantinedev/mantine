import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { BaseDemo } from './_base';

const getCode = (prop: string) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${prop}>
      {/* ...content */}
    </Accordion>
  )
}
`;

export const disableTransitions: MantineDemo = {
  type: 'demo',
  component: () => <BaseDemo transitionDuration={0} maw={380} mx="auto" />,
  code: getCode('transitionDuration={0}'),
};

export const customTransitions: MantineDemo = {
  type: 'demo',
  component: () => <BaseDemo transitionDuration={1000} maw={380} mx="auto" />,
  code: getCode('transitionDuration={1000}'),
};
