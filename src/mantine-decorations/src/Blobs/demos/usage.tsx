import React from 'react';
import { Blobs } from '../Blobs';

const code = `
<div
  style={{
    backgroundImage: 'linear-gradient(90deg, #6741d9 0%, #22b8cf 100%)',
    height: 400,
    position: 'relative',
  }}
>
  <Blobs color="#fff" opacity={0.1} />
</div>
`;

function Demo() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(90deg, #6741d9 0%, #22b8cf 100%)',
        height: 400,
        position: 'relative',
      }}
    >
      <Blobs color="#fff" opacity={0.1} />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
