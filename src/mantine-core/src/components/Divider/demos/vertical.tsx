import React from 'react';
import { Divider } from '../Divider';
import { Badge } from '../../Badge/Badge';

const code = `
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }}
>
  <Badge>Badge</Badge>
  <Divider margins="md" orientation="vertical" />
  <Badge>Badge</Badge>
  <Divider margins="md" orientation="vertical" />
  <Badge>Badge</Badge>
</div>
`;

function Demo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Badge>Badge</Badge>
      <Divider margins="md" orientation="vertical" />
      <Badge>Badge</Badge>
      <Divider margins="md" orientation="vertical" />
      <Badge>Badge</Badge>
    </div>
  );
}

export const vertical: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
