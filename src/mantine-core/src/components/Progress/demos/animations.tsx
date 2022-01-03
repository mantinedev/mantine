import React from 'react';
import { Progress } from '../Progress';

const code = '<Progress value={75} animate />';

function Label() {
  return <Progress value={75} animate />;
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
