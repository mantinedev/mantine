import React from 'react';
import { Dropzone } from '../Dropzone';

const code = `
`;

function Demo() {
  return <Dropzone onDrop={() => {}}>{() => 'hello'}</Dropzone>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
