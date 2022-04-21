import React from 'react';
import { Tooltip } from './Tooltip';

export default { title: 'Tooltip2' };

export const Usage = () => (
  <div
    style={{
      padding: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '200vw',
    }}
  >
    <Tooltip position="left">
      <div>target</div>
    </Tooltip>
  </div>
);
