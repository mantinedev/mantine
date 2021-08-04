import React from 'react';
import { storiesOf } from '@storybook/react';
import { Popper } from './Popper';

storiesOf('@mantine/core/Popper', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Popper placement="center" position="top" gutter={5} withArrow arrowSize={3} />
  </div>
));
