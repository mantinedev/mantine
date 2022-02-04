import React from 'react';
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput length={4} placeholder="⭐️" />;
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
};
