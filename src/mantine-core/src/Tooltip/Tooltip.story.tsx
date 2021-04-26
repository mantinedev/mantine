import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from './Tooltip';

storiesOf('@mantine/core/Tooltip', module).add('General usage', () => (
  <div style={{ padding: 100 }}>
    <div>
      <Tooltip label="tooltip" placement="start" opened>
        <div style={{ height: 50, width: 200 }}>top-center</div>
      </Tooltip>
    </div>
    <div style={{ marginTop: 20 }}>
      <Tooltip label="tooltip" position="bottom">
        <div style={{ height: 50, width: 200 }}>bottom-center</div>
      </Tooltip>
    </div>
    <div style={{ marginTop: 20 }}>
      <Tooltip label="tooltip" position="left" opened>
        <div style={{ height: 50, width: 200 }}>left-center</div>
      </Tooltip>
    </div>
    <div style={{ marginTop: 20 }}>
      <Tooltip label="tooltip" position="right">
        <div style={{ height: 50, width: 200 }}>right-center</div>
      </Tooltip>
    </div>
  </div>
));
