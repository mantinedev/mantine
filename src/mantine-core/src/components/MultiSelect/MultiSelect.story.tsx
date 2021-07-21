import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

storiesOf('@mantine/core/MultiSelect', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <MultiSelect />
  </div>
));
