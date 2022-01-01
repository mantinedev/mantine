import React from 'react';
import { Switch } from '../Switch';

function Label() {
  return (
    <>
      <Switch size="lg" color="green" onLabel="On" offLabel="Off" />
    </>
  );
}

export const labels: MantineDemo = {
  type: 'demo',
  component: Label,
};
