import React from 'react';
import { PinInput } from '../PinInput';

function Demo() {
  return <PinInput length={4} />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
