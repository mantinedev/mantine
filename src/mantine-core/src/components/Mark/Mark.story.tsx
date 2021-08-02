import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Mark } from './Mark';

storiesOf('@mantine/core/Mark', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Text>
      Hello <Mark>this is mark</Mark> here
    </Text>
  </div>
));
