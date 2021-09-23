import React from 'react';
import { MediaQuery } from '../MediaQuery';
import { Badge } from '../../Badge';

const code = `
`;

function Demo() {
  return (
    <div>
      <MediaQuery largerThan="lg">
        <Badge>Larger than lg</Badge>
      </MediaQuery>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
