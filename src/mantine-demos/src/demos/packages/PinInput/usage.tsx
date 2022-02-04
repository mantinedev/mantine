import React from 'react';
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput length={4} />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
