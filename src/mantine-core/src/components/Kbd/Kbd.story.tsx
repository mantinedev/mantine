import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../../theme';
import { Kbd } from './Kbd';

storiesOf('@mantine/core/Kbd', module).add('General usage', () => (
  <div style={{ padding: 50 }}>
    <Kbd>shift</Kbd> + <Kbd>H</Kbd>
  </div>
));
