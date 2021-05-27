import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditUserPopover } from './EditUserPopover';

storiesOf('@mantine/demos/EditUserPopover', module).add('General usage', () => (
  <div style={{ padding: 200 }}>
    <EditUserPopover />
  </div>
));
