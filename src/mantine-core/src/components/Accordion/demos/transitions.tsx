import React from 'react';
import { BaseDemo } from './_base';

export const disableTransitions: MantineDemo = {
  type: 'demo',
  component: () => <BaseDemo transitionDuration={0} sx={{ maxWidth: 560 }} mx="auto" />,
  code: '<Accordion transitionDuration={0} />',
};

export const customTransitions: MantineDemo = {
  type: 'demo',
  component: () => <BaseDemo transitionDuration={1000} sx={{ maxWidth: 560 }} mx="auto" />,
  code: '<Accordion transitionDuration={1000} /> // -> 1000ms transition duration',
};
