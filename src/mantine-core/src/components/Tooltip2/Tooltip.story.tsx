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
    <Tooltip position="right-end" label="It is a tooltip">
      <button type="button" style={{ width: 200, height: 200 }}>
        target
      </button>
    </Tooltip>
  </div>
);

export const TooltipGroup = () => (
  <Tooltip.Group>
    <Tooltip label="Tooltip 1">
      <button type="button">Button 1</button>
    </Tooltip>
    <Tooltip label="Tooltip 2">
      <button type="button">Button 2</button>
    </Tooltip>
    <Tooltip label="Tooltip 3">
      <button type="button">Button 3</button>
    </Tooltip>
  </Tooltip.Group>
);
