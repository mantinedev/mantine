import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code } from './Code';

storiesOf('@mantine/core/Code', module).add('Code', () => (
  <div style={{ padding: 50 }}>
    <Code>React.createElement</Code>
  </div>
));
