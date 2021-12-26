import React from 'react';
import { PinInput } from '../PinInput';

function Demo() {
  return <PinInput length={4} placeholder="⭐️" />;
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
};
