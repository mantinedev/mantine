import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from './Tooltip';

storiesOf('@mantine/core/Tooltip', module).add('General usage', () => (
  <div style={{ padding: 100 }}>
    <div>
      <Tooltip label="tooltip">top-center</Tooltip>
    </div>
    <div style={{ marginTop: 20 }}>
      <Tooltip label="tooltip" position="bottom">
        bottom-center
      </Tooltip>
    </div>
    <div style={{ marginTop: 20 }}>
      <Tooltip label="tooltip" position="left">
        left-center
      </Tooltip>
    </div>
    <div style={{ marginTop: 20 }}>
      <Tooltip label="tooltip" position="right">
        right-center
      </Tooltip>
    </div>
  </div>
));
