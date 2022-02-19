import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Code } from './Code';

storiesOf('@mantine/core/Code/stories', module).add('Default props on MantineProvider', () => (
  <MantineProvider defaultProps={{ Code: { color: 'red' } }}>
    <Code>Default props</Code>
  </MantineProvider>
));
