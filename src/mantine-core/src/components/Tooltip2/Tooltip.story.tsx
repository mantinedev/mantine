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
    <Tooltip position="right-end" label="It is a tooltip" openDelay={100} closeDelay={1000}>
      <button type="button" style={{ width: 200, height: 200 }}>
        target
      </button>
    </Tooltip>
  </div>
);
