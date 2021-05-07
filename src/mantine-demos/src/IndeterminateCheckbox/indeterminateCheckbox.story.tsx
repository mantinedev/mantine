import React from 'react';
import { storiesOf } from '@storybook/react';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';

storiesOf('@mantine/demos/IndeterminateCheckbox', module).add('General usage', () => (
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
      <IndeterminateCheckbox />
    </div>
  </div>
));
