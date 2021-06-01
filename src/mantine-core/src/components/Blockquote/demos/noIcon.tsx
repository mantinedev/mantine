import React from 'react';
import { Blockquote } from '../Blockquote';

const code = `
<Blockquote cite="– Dan Abramov, 2016" icon={null}>
  I have a Sublime Text license on another laptop
</Blockquote>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <Blockquote cite="– Dan Abramov, 2016" icon={null}>
        I have a Sublime Text license on another laptop
      </Blockquote>
    </div>
  );
}

export const noIcon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
