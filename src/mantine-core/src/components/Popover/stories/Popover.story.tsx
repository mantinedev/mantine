import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../../TextInput/TextInput';
import { Wrapper } from './_wrapper';

storiesOf('@mantine/core/Popover/stories', module).add('Focus behavior', () => (
  <div style={{ padding: 100 }}>
    <Wrapper />
    <TextInput placeholder="Focus me when popover is opened" />
  </div>
));
