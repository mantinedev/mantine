import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntermediateCheckbox } from './IntermediateCheckbox';

storiesOf('@mantine/demos/IntermediateCheckbox', module).add('General usage', () => (
  <div
    style={{
      display: 'flex',
      padding: '40px 10px',
      justifyContent: 'center',
      height: '100vh',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ width: 380 }}>
      <IntermediateCheckbox />
    </div>
  </div>
));
